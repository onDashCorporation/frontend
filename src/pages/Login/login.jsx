import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import TextImg from "../../components/textimg/textimg";
import { useNavigate } from "react-router-dom";
import app from "../../services/api_login";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!values.email.trim() || !values.senha.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(values.senha)) {
      toast.error("A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, caracteres especiais e números.");
      return;
    }

    setLoading(true);

    try {
      const response = await app.post("/login", values);
      setLoading(false);
      console.log(response.data);

      if (response.data.fk_cargoId === 3) {
        navigate("/solicitante");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      setLoading(false);

      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao tentar fazer login");
      }
    }
  };

  return (
    <S.Main>
      <ToastContainer
        autoClose={9000}
        closeOnClick
        newestOnTop
        position="top-right"
        hideProgressBar
      />
      <S.Login>
        <S.TitleContainer>
          <S.Title>Login</S.Title>
          <S.SubTitle>
            Entre com sua conta e tenha acesso a um mundo de possibilidades.
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
          <S.InputContainer>
            <Input
              placeholder="E-mail"
              type="text"
              required
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
            />
            <Input
              placeholder="Senha"
              type="password"
              required
              onChange={(e) =>
                setValues({ ...values, senha: e.target.value })
              }
            />
          </S.InputContainer>
        </S.ContainerErro>

        <S.ButtonContainer>
          <Button
            Title="Entrar"
            onClick={handleSubmit}
            disabled={loading || !values.email || !values.senha}
          />
          <S.SubText>
            Se{" "}
            <S.Link
              onClick={() => {
                navigate("/register");
              }}
            >
              cadastre-se
            </S.Link>{" "}
            ou{" "}
            <S.Link
              onClick={() => {
                navigate("/forgot");
              }}
            >
              recupere
            </S.Link>{" "}
            a sua conta
          </S.SubText>
        </S.ButtonContainer>
        <S.TermsContainer>
          <S.Terms>
            Ao acessar você concorda com nossos termos de <b>serviço</b> e <b>política de privacidade</b>
          </S.Terms>
        </S.TermsContainer>
      </S.Login>
      <S.ImgContainer>
        <S.ImgTextContainer>
          <TextImg />
        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de login" />
      </S.ImgContainer>
    </S.Main>
  );
};

export default Login;

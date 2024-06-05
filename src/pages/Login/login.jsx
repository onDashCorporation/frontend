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
import { slide } from "react-burger-menu";
import { slider } from "@nextui-org/react";
import { useParams } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Correção: useNavigate deve ser atribuído a 'navigate'

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Verificação se os campos de email e senha estão em branco
    if (!values.email.trim() || !values.senha.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
  
    // Verificação do formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }
  
    // Verificação da senha
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(values.senha)) {
      toast.error("A senha deve ter pelo menos 8 caracteres incluindo: letras maiúsculas, minúsculas, caracteres especiais e números.");
      return;
    }
  
    setLoading(true);
  
    try {
      // Se todas as validações passarem, procedemos com o login
      const response = await app.post("/login", values);
      setLoading(false);
      console.log(response.data);
    
      
      navigate("/dashboard"); // Correção: redirecionamento deve usar 'navigate' em vez de 'history'
      
    } catch (error) {
      setLoading(false);
  
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao tentar fazer login");
      }
    }
};

  

  //const nav = useNavigate();
  
  return (
    <S.Main>
       <ToastContainer
        autoClose={9000} // Fechar automaticamente após 9 segundos
        closeOnClick // Fechar ao clicar na notificação
        newestOnTop // Colocar as notificações mais recentes em cima
        position="top-right" // Posição das notificações
        hideProgressBar // Esconder a barra de progresso
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
                nav("/register");
              }}
            >
              cadastre
            </S.Link>{" "}
            ou{" "}
            <S.Link
              onClick={() => {
                nav("/forgot");
              }}
            >
              recupere
            </S.Link>{" "}
            a sua conta
          </S.SubText>
        </S.ButtonContainer>
        <S.TermsContainer>
          <S.Terms>
            ao se acessar você concorda <br />
            com nossos termos de <b>serviço</b> e <b>política privada</b>
          </S.Terms>
        </S.TermsContainer>
      </S.Login>
      <S.ImgContainer>
        <S.ImgTextContainer>
          <TextImg />
        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};

export default Login;




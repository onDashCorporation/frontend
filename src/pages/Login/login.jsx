import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import TextImg from "../../components/textimg/textimg";
import { useNavigate, useParams } from "react-router-dom";
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
  const { fk_cargoId } = useParams();
 
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
      console.log("Response data:", response.data); // Debug statement
 
      console.log("fk_cargoId:", fk_cargoId); // Debug statement
 
      if (fk_cargoId === "3") {
        toast.success('Login bem-sucedido! Redirecionando para a página de solicitante...');
        // navigate("/solicitante");
      } else {
        toast.success('Login bem-sucedido! Redirecionando para o dashboard...');
        // navigate("/dashboard");
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
[02:09] GABRIELA LIMA DA LUZ
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app from "../../services/api_login";
import Input from "../../components/inputs/input";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import TextImg from "../../components/textimg/textimg";
import * as S from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Login = () => {
  const { fk_cargoId } = useParams();
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
 
    setLoading(true);
 
    try {
      const response = await app.post("/login", values);
      setLoading(false);
 
      console.log("Full Response:", response);
      console.log("Response data:", response.data);
 
   
      const fk_cargoId = response.data.fk_cargoId;
 
      console.log("fk_cargoId:", fk_cargoId);
 
      if (fk_cargoId === undefined) {
        toast.error('fk_cargoId não está presente nos dados do usuário.');
        return;
      }
 
     
      if (fk_cargoId === 3) {
        toast.success('Login bem-sucedido! Redirecionando para a página de solicitante...');
        console.log("fk_usuarioId:", response.data.fk_usuarioId);
        navigate(`/solicitante/${response.data.fk_usuarioId}`);
      } else {
        toast.success('Login bem-sucedido! Redirecionando para o dashboard...');
        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);
 
      console.error("Error response:", error.response);
 
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
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <Input
              placeholder="Senha"
              type="password"
              required
              value={values.senha}
              onChange={(e) => setValues({ ...values, senha: e.target.value })}
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
 

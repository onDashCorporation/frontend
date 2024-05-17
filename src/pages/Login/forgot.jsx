import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import TextImg from "../../components/textimg/textimg"
import { useNavigate } from "react-router-dom";
import app from "../../services/api_login";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
  const nav = useNavigate();
  const [ values , setValues] = useState({
    email: '',
  })
  const handleSubmit = () => {
    // Verificação se o campo de email está em branco
    if (!values.email.trim()) {
      toast.error("Por favor, insira seu email.");
      return;
    }

    // Verificação do formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    // Se todas as validações passarem, procedemos com a solicitação de reset de senha
    app.post('/forgot-password', values)
      .then(res => console.log(res))
      .catch(res => console.log(res));
};


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
          <S.Title>Esqueceu?</S.Title>
          <S.SubTitle>
            Esqueceu a senha? Insira suas informações e aguarde o email.
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
        <S.InputContainer>
          <Input placeholder="E-mail" type="text" onChange={e => setValues({...values, email: e.target.value})}/>
        </S.InputContainer>
        </S.ContainerErro>

        <S.ButtonContainer>
          <Button Title="Recuperar"onClick={() => {
            handleSubmit()
            }}/>
          <S.SubText>
            Se{" "}
            <S.Link
              onClick={() => {
                nav("/register");
              }}
            >
              cadastre
            </S.Link>{" "}
            ou faça{" "}
            <S.Link
              onClick={() => {
                nav("/");
              }}
            >
              login
            </S.Link>{" "}
            em sua conta
          </S.SubText>
        </S.ButtonContainer>
        <S.TermsContainer>
          <S.Terms>
            ao se acessar você concorda com <br/> nossos termosde <b>serviço</b> e <b>política privada</b>
          </S.Terms>
        </S.TermsContainer>
      </S.Login>
      <S.ImgContainer>
        <S.ImgTextContainer>
          <TextImg/>
        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Forgot;

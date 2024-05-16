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

const Reset = () => {
  const nav = useNavigate();
  const {token} = useParams();
  const [error, setError] = useState('');
  
  const [ values , setValues] = useState({
    newPassword: '',
    confPassword: '',
    token
  })

  const handleSubmit = () => {
    // Verificação se os campos de senha estão em branco
    if (!values.newPassword.trim() || !values.confPassword.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    // Verificação se as senhas correspondem
    if (values.newPassword !== values.confPassword) {
      setError("As senhas não correspondem.");
      toast.error("Por favor, insira a senha novamente");
      return;
    }

    // Verificação se a nova senha atende aos critérios mínimos
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(values.newPassword)) {
      setError("A senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e 1 número.");
      toast.error("A senha não preenche os requisitos");
      return;
    }

    // Se todas as validações passarem, procedemos com a solicitação de reset de senha
    app.post('/reset-password', { newPassword: values.newPassword, token })
      .then(res => {
        toast.success("Senha alterada com sucesso");
        console.log(res);
      })
      .catch(error => {
        toast.error("Erro ao tentar alterar a senha");
        console.error(error);
      });
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
          <S.Title>Nova Senha</S.Title>
          <S.SubTitle>
            Insira uma nova senha para acessar sua conta
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
        <S.InputContainer>
          <Input 
          placeholder="Nova Senha" 
          type="password"
          onChange={e => setValues({...values, newPassword: e.target.value})}/>
          <Input 
          placeholder="Confirmar Senha" 
          type="password"
          onChange={e => setValues({...values, confPassword: e.target.value})}/>
        </S.InputContainer>
        {error && <S.TextErro>{error}</S.TextErro>} 
        </S.ContainerErro>

        

        <S.ButtonContainer>
          <Button Title="Entrar"
          onClick={() => {handleSubmit()}}/>
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
            ao se acessar você concorda <br />
            com nossos termos de <b>serviço</b> e <b>política privada</b>
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
export default Reset;
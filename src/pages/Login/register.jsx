import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import app from "../../services/api_login";
import TextImg from "../../components/textimg/textimg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectBox from "../../components/SelectBox/select";

const Register = () => {
  const nav = useNavigate();
  const [ values , setValues] = useState({
    usuNome: '',
    email: '',
    senha: '',
    fk_cargoId: '',
    fk_depId: ''
  })

  
  const [departamentos, setDepartamentos] = useState([]);

  const [cargos, setCargos] = useState([]);
  const fetchCargos = () => {
    app.get('/cargo')
      .then(res => setCargos(res.data))
      .catch(err => {
        console.error("Erro ao buscar cargos:", {
          message: err.message,
          response: err.response
        });
        toast.error("Erro ao buscar cargos.");
      });
  };

  const fetchDepartamentos = () => {
    app.get('/departamento')
    .then(res => setDepartamentos(res.data))
    .catch(err => {
      console.error("Erro ao buscar departamentos:", {
        message: err.message,
        response: err.response
      });
      toast.error("Erro ao buscar departamentos.");
    });
  };

  const handleSubmit = () => {

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

    // Se todas as validações passarem, procedemos com o cadastro
    app.post('/signup', values)
        .then(res => {
            toast.success("Cadastro realizado com sucesso.");
            nav("/dashboard")
        })
        .catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Erro ao tentar realizar o cadastro.");
            }
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
          <S.Title>Cadastro</S.Title>
          <S.SubTitle>
            Entre com sua conta e tenha acesso a um mundo de possibilidades.
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
        <S.InputContainer>
          <Input placeholder="Nome" type="text" onChange={e => setValues({...values, usuNome: e.target.value})}/>
          <Input placeholder="E-mail" type="text" onChange={e => setValues({...values, email: e.target.value})} />
          <Input placeholder="Senha" type="password" onChange={e => setValues({...values, senha: e.target.value})}/>
          <SelectBox
            Title={'Selecione um cargo'}
            opsMap={cargos}
            opId="cargoId"
            opName="cargo_nome"
            onChange={value => setValues({ ...values, fk_cargoId: value })}
            onFocus={fetchCargos}
          />
          <SelectBox
            Title={'Selecione o departamento'}
            opsMap={departamentos}
            opId="depId"
            opName="nome_depart"
            onChange={value => setValues({ ...values, fk_depId: value })}
            onFocus={fetchDepartamentos}
          />
        </S.InputContainer>
        </S.ContainerErro>

        <S.ButtonContainer>
          <Button Title="Criar" onClick={() => {
            console.info('teste')
            handleSubmit()
            

            }}/>
          <S.SubText>
            Faça seu{" "}
            <S.Link
              onClick={() => {
                nav("/");
              }}
            >
              login{" "}
            </S.Link>
            ou{" "}
            <S.Link
              onClick={() => {
                nav("/forgot");
              }}
            >
              recupere{" "}
            </S.Link>
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
        <TextImg/>

        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Register;

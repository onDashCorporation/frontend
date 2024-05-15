import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";
import { useState, useEffect } from "react";
import app from "../../services/api_login";


export default function Modal({isOpen, setOpenModal, title,placeholder, func}) {


  // function ToggleSwitch() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("switch");
  //   // Get the output text
  //   var input = document.getElementById("name").value;
  //   var textarea = document.getElementById("desc").value;
  
  //   if (checkBox.checked == true){
  //     input = "";
  //   } else {
  //     textarea = "";
  //   }
  // }
  let handleCloseModal = () => {
    setOpenModal(false);
  };

  // para os inputs
  const [inputValues, setInputValues] = useState({
    name: '',
    desc: ''
  });
    // primeira letra maiuscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: capitalizeFirstLetter(value)
    }));
  };


  // para a coluna api
  const [column_name, setColumn_name] = useState('');
  // para o endpoint
  const [endpoint, setEndpoint] = useState('/departamento');
  useEffect(() => {
    const updateEndpoint = () => {
      if (title === "Informações do Departamento") {
        setEndpoint('/departamento');
        setColumn_name('nome_depart');
      } else if (title === "Informações da Categoria") {
        setEndpoint('/categoria');
        setColumn_name('nome_categoria');
      } else if (title === "Informações do Funcionário") {
        setEndpoint('/cargo');
        setColumn_name('cargo_nome');
      }
    };
    updateEndpoint();
  }, [title]); // This useEffect runs whenever the title changes

  // axios
  const handleAddButtonClick = async () => {
    console.log('Valores dos inputs:', inputValues);
    if (inputValues.name.trim() === '') {
      console.log('Insira o nome.');
      return;
    }
    if (inputValues.desc.trim() === '') {
      console.log('Insira a descrição.');
      return;
    }
    if (!column_name) {
      console.error('Nome da coluna não definido.');
      return;
    }
    try {
      const response = await app.post(endpoint, { // endpoint da API
        [column_name]: inputValues.name,
        // desc: inputValues.desc
      }, {
        headers: {
          'Content-Type': 'application/json' // Assegura que o Content-Type seja application/json
        }
      });
      console.log('Adicionado:', response.data);
      // Limpar os campos depois de enviar
      setInputValues({ name: '', desc: '' });
      setOpenModal(false); // Fechar modal depois do envio ser feito
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        console.error('Erro ao adicionar:', error.response.data);
      } else if (error.request) {
        // A requisição foi feita, mas não houve resposta
        console.error('Erro ao adicionar:', error.request);
      } else {
        // Outro erro ocorreu ao configurar a requisição
        console.error('Erro ao adicionar:', error.message);
      }
    }
  };
 
    return(
    <div>
        {isOpen && (<S.Overlay>
          <S.Modal>
        <S.ContainerHeader>
          <S.header>
          <S.TitleM>{title}</S.TitleM>
          <S.Close onClick={handleCloseModal}><S.IconClose/></S.Close>
          </S.header>
         </S.ContainerHeader>
         

          <S.ContainerM>
            <S.Div>
                <S.Form>
                <S.HeaderM>
                  <S.Text>Nome</S.Text>
                  <S.Switch>
                    <S.SwitchText>Adiconar em sequência</S.SwitchText>
                    <label class="switch">
                      <input type="checkbox" id="switch"/>
                      <span class="slider round"></span>
                    </label>
                  </S.Switch>
                  </S.HeaderM>
                  <S.Input
                    autoComplete="off"
                    required
                    name='name'
                    id="name"
                    type="text"
                    placeholder={placeholder || "Nome"}
                    value={inputValues.name}
                    onChange={handleChange}
                  />
                  { func == true ?(
                      <div></div>
                      ) : 
                      (<S.Text>
                        Cargo
                      </S.Text>
                    
                    )}
                  <S.Text>Descrição</S.Text>
                  <S.Textarea
                    autoComplete="off"
                    name='desc'
                    id="desc"
                    rows="5"
                    maxLength="130"
                    type="text"
                    placeholder="Adicione uma descrição"
                    value={inputValues.desc}
                    onChange={handleChange}
                  />
                </S.Form>
            </S.Div>
            <S.ConatinerButton>
            <ButtonConfirm 
              Title="Adicionar" 
              onClick={handleAddButtonClick} 
              color="white"  
              width="150px" 
              height="40px" 
              backgroundColor="#38AD68" 
              fontSize="15px"/>
            </S.ConatinerButton>

          </S.ContainerM>

        </S.Modal></S.Overlay>)}
        </div>
    )
  }

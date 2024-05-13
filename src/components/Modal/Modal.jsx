import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";
import { useState } from "react";


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

  const [inputValues, setInputValues] = useState({
    name: '',
    desc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddButtonClick = () => {
    console.log('Valores dos inputs:', inputValues);
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
            <ButtonConfirm Title="Adicionar" onClick={handleAddButtonClick} color="white"  width="150px" height="40px" backgroundColor="#38AD68" fontSize="15px"/>
            </S.ConatinerButton>

          </S.ContainerM>

        </S.Modal></S.Overlay>)}
        </div>
        

      
  
    )
  }



//   const [infos, setInfos] = useState([]);
 
//     const [nameInfo, setNameInfo] = useState('');
//     const [descInfo, setDescInfo] = useState('');
 
 
//     // ADICIONAR
//     const addInfos= async () => {
//       if (nameInfo.trim() === '') {
//         console.log('Insira o nome.');
//         return;
//       }
//       if (descInfo.trim() === '') {
//         console.log('Insira a descrição.');
//         return;
//       }
//       try {
// const response = await axios.post(API_URL, {
//           name: nameInfo,
//           desc: descInfo,
//         });
//         setInfos([...infos, response.data]);
//         setNameInfo('');
//         setDescInfo('');
//         Console.log('Adicionado',);
//       } catch (error) {
//         console.error('Erro ao adicionar', error);
//       }
//     };
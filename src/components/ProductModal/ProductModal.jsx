import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";
import app from "../../services/api_login";

import { useState, useEffect } from 'react';

export default function ProductModal({isOpen, setOpenModal, title}) {


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

  // para os inputs
  const [inputValues, setInputValues] = useState({
    name: '',
    qtde: '',
    category: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // axios
  const handleAddButtonClick = async () => {
    console.log('Valores dos inputs:', inputValues);
    if (inputValues.name.trim() === '') {
      console.log('Insira o nome.');
      return;
    }
    if (inputValues.qtde.trim() === '') {
      console.log('Insira a quantidade.');
      return;
    }
    if (inputValues.category.trim() === '') {
      console.log('Insira a categoria.');
      return;
    }
    try {
      const response = await app.post('/cadItem', { // endpoint da API
        nome_item: inputValues.name,
        qtdMin: inputValues.qtde,
        fk_categoriaId: inputValues.category,        
      }, {
        headers: {
          'Content-Type': 'application/json' // Assegura que o Content-Type seja application/json
        }
      });
      console.log('Adicionado:', response.data);
      // Limpar os campos depois de enviar
      setInputValues({ name: '', qtde: '', category: '' });
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

  let handleCloseModal = () => {
    setOpenModal(false);
  };

  // Para exibir o preview da imagem
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (isOpen) {
      function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setImgSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }

      const input = document.getElementById('img-input');
      input.addEventListener('change', handleImageChange);

      return () => {
        input.removeEventListener('change', handleImageChange);
      };
    }
  }, [isOpen]); // Dependendo do estado isOpen para adicionar ou remover o event listener



  // Para o preview, qnd o src estiver vazio
  function handleImageError() {
    document.getElementById("DivPreview").style.display = "none";
  }
  function handleInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
      const image = new Image();
      image.src = reader.result;
  
      image.onload = function() {
        document.getElementById("DivPreview").style.display = "block";
        document.getElementById("preview").src = reader.result;
      };
  
      image.onerror = function() {
        document.getElementById("DivPreview").style.display = "none";
      };
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

    return(
    <div>
        {isOpen && (
          <S.Overlay>
            <S.Modal>
              <S.Overflow>
                <S.ContainerHeader>
                  <S.header>
                  <S.TitleM>{title}</S.TitleM>
                  <S.Close onClick={handleCloseModal}><S.IconClose/></S.Close>
                  </S.header>
                </S.ContainerHeader>
          
                <S.ContainerM>
                  <S.Div>
                    <S.Form>
                      <S.Row1>

                        <S.Row1Div>
                          <S.Image>
                            <S.DivPreview id="DivPreview" className="preview-container">
                              <S.AddImage type="file" name="arquivo" id="img-input" accept="image/png, image/jpeg" onChange={handleInputChange}/>

                              {imgSrc ? <S.PreviewImage id="preview" src={imgSrc} onError={handleImageError}/> : null}
                            </S.DivPreview>
                          </S.Image>

                          <S.Row1Wrap>
                            <S.Row1Content>
                              <S.Text>Nome</S.Text>
                              <S.NameInput 
                                required 
                                autoComplete="off" 
                                name='name' 
                                id="name" 
                                type="text"  
                                placeholder={"Nome"}
                                value={inputValues.name}
                                onChange={handleChange}
                              />
                            </S.Row1Content>

                            <S.Row1Content>
                              <S.Text>Categoria</S.Text>
                              <S.CategoryInput
                                required 
                                autoComplete="off"  
                                name='category' 
                                id="category" 
                                type="number"  
                                placeholder={"Id Categoria"}
                                value={inputValues.category}
                                onChange={handleChange}
                              />
                            </S.Row1Content>
                          </S.Row1Wrap>
                        </S.Row1Div>

                        <S.Switch>
                          <S.SwitchText>Adiconar em sequência</S.SwitchText>
                          {/* <S.SwitchCheckbox> */}
                          <label class="switch">
                            <input type="checkbox" id="switch"/>
                            <span class="slider round" />
                          </label>
                          {/* </S.SwitchCheckbox> */}
                        </S.Switch>
                      </S.Row1>      
                          
                      <S.Row2>
                        <S.Row2Content>
                          <S.Text>Quantidade</S.Text>
                            <S.Inputs 
                            required 
                            autoComplete="off" 
                            name='qtde' 
                            id="qtde" 
                            type="number"  
                            placeholder={"Quantidade"}
                            value={inputValues.qtde}
                            onChange={handleChange}
                            />
                        </S.Row2Content>
                            
                        <S.Row2Content>
                          <S.Text>preço unitário</S.Text>
                          <S.Inputs autoComplete="off" required name='price' id="price" type="text"  placeholder={"Preço unitário"}/>
                        </S.Row2Content>

                        <S.Row2Content>
                          <S.Text>vida útil</S.Text>
                          <S.Inputs autoComplete="off" required name='lifespan' id="lifespan" type="text"  placeholder={"Vida útil"}/>
                        </S.Row2Content>

                        <S.Row2Content>
                          <S.Text>medidas</S.Text>
                          <S.Inputs autoComplete="off" required name='measurements' id="measurements" type="text"  placeholder={"Medidas"}/>
                        </S.Row2Content>
                      </S.Row2>

                      <S.Text>Descrição</S.Text>
                      <S.Textarea autoComplete="off" name='desc' id="desc" rows="5" maxlength="130" type="text" placeholder="Descrição"/>
                    </S.Form> 
                  </S.Div>

                  <S.ContainerButton>
                    <ButtonConfirm 
                      Title="Adicionar" color="white"  width="150px" height="40px" backgroundColor="#38AD68" fontSize="15px" 
                        onClick={handleAddButtonClick}
                    />
                  </S.ContainerButton>

                </S.ContainerM>
              </S.Overflow>
            </S.Modal>
          </S.Overlay>)}
        </div>
        

      
  
    )
}
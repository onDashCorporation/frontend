import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";

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
                              {imgSrc ? <S.PreviewImage id="preview" src={imgSrc} onError={handleImageError}/> : null}
                            </S.DivPreview>
                            
                            
                              <S.AddImage type="file" name="arquivo" id="img-input" accept="image/png, image/jpeg" onChange={handleInputChange}/>
                            
                          </S.Image>

                          <S.Row1Wrap>
                            <S.Row1Content>
                              <S.Text>Nome</S.Text>
                              <S.NameInput autoComplete="off" required name='name' id="name" type="text"  placeholder={"Digite o nome"}/>
                            </S.Row1Content>

                            <S.Row1Content>
                              <S.Text>Categoria</S.Text>
                              <S.CategoryInput autoComplete="off" required name='category' id="category" type="text"  placeholder={"Adicione uma categoria"}/>
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
                          <S.Text>Marca</S.Text>
                            <S.Inputs autoComplete="off" required name='brand' id="brand" type="text"  placeholder={"Adicione a marca"}/>
                        </S.Row2Content>
                            
                        <S.Row2Content>
                          <S.Text>preço unitário</S.Text>
                          <S.Inputs autoComplete="off" required name='price' id="price" type="text"  placeholder={"Adicione o preço unitário"}/>
                        </S.Row2Content>

                        <S.Row2Content>
                          <S.Text>vida útil</S.Text>
                          <S.Inputs autoComplete="off" required name='lifespan' id="lifespan" type="text"  placeholder={"Adicione a vida útil"}/>
                        </S.Row2Content>

                        <S.Row2Content>
                          <S.Text>medidas</S.Text>
                          <S.Inputs autoComplete="off" required name='measurements' id="measurements" type="text"  placeholder={"Adicione as medidas"}/>
                        </S.Row2Content>
                      </S.Row2>

                      <S.Text>Descrição</S.Text>
                      <S.Textarea autoComplete="off" name='desc' id="desc" rows="5" maxlength="130" type="text" placeholder="Adicione uma descrição"/>
                    </S.Form> 
                  </S.Div>

                  <S.ContainerButton>
                    <ButtonConfirm Title="Adicionar" color="white"  width="150px" height="40px" backgroundColor="#38AD68" fontSize="15px"/>
                  </S.ContainerButton>

                </S.ContainerM>
              </S.Overflow>
            </S.Modal>
          </S.Overlay>)}
        </div>
        

      
  
    )
}
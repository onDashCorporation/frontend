import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";


export default function ProductModal({isOpen, setOpenModal, title, placeholder}) {


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
 
    return(
    <div>
        {isOpen && (
          <S.Overlay>
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

                      <S.Image>
                        <S.UploadDiv>
                          <S.IconUpload />
                          {/* <S.UploadButton></S.UploadButton> */}
                          <S.AddImage type="file" name="arquivo" accept="image/png, image/jpeg"/>
                        </S.UploadDiv>
                      </S.Image>
                      
                      <S.HeaderContent>
                        <S.Text>Nome</S.Text>
                        <S.NameInput autoComplete="off" required name='name' id="name" type="text"  placeholder={"Digite o nome"}/>
                      </S.HeaderContent>

                      <S.HeaderContent>
                        <S.Text>Categoria</S.Text>
                        <S.CategoryInput autoComplete="off" required name='category' id="category" type="text"  placeholder={"Adicione uma categoria"}/>
                      </S.HeaderContent>

                      <S.Switch>
                        <S.SwitchText>Adiconar em sequência</S.SwitchText>
                        <label class="switch">
                        <input type="checkbox" id="switch"/>
                        <span class="slider round"></span>
                        </label>
                      </S.Switch>
                    </S.HeaderM>      
                        
                    <S.Div2>
                      <S.Div2Content>
                        <S.Text>Marca</S.Text>
                          <S.Inputs autoComplete="off" required name='brand' id="brand" type="text"  placeholder={"Adicione a marca"}/>
                      </S.Div2Content>
                          
                      <S.Div2Content>
                        <S.Text>preço unitário</S.Text>
                        <S.Inputs autoComplete="off" required name='price' id="price" type="text"  placeholder={"Adicione o preço unitário"}/>
                      </S.Div2Content>

                      <S.Div2Content>
                        <S.Text>vida útil</S.Text>
                        <S.Inputs autoComplete="off" required name='lifespan' id="lifespan" type="text"  placeholder={"Adicione a vida útil"}/>
                      </S.Div2Content>

                      <S.Div2Content>
                        <S.Text>medidas</S.Text>
                        <S.Inputs autoComplete="off" required name='measurements' id="measurements" type="text"  placeholder={"Adicione as medidas"}/>
                      </S.Div2Content>
                    </S.Div2>

                    <S.Text>Descrição</S.Text>
                    <S.Textarea autoComplete="off" name='desc' id="desc" rows="5" maxlength="130" type="text" placeholder="Adicione uma descrição"/>
                  </S.Form> 
                </S.Div>

                <S.ContainerButton>
                <ButtonConfirm Title="Adicionar" color="white"  width="150px" height="40px" backgroundColor="#38AD68" fontSize="15px"/>
                </S.ContainerButton>

              </S.ContainerM>

            </S.Modal>
          </S.Overlay>)}
        </div>
        

      
  
    )
}
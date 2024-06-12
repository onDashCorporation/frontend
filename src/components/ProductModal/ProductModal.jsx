import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./switch.css";
import app from "../../services/api_login";
import { ToastContainer, toast } from 'react-toastify';
import SelectBox from "../../components/SelectBox/select";

import { useState, useEffect } from 'react';

export default function ProductModal({ isOpen, setOpenModal, title }) {
  // Estado para armazenar o valor do switch
  const [isSequentialAdd, setIsSequentialAdd] = useState(false);

  function ToggleSwitch() {
    var checkBox = document.getElementById("switch");
    setIsSequentialAdd(checkBox.checked);
  }

  // para os inputs
  const [inputValues, setInputValues] = useState({
    name: '',
    qtde: '',
    image: null,
    fk_categoriaId: ''
  });

  // Para exibir o preview da imagem
  const [imgSrc, setImgSrc] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInputValues(prevState => ({
      ...prevState,
      image: file
    }));
    const reader = new FileReader();
    reader.onload = () => {
      setImgSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // axios
  const handleAddButtonClick = async () => {
    if (inputValues.name.trim() === '') {
      toast.warning('Insira o nome.')
      return;
    }
    if (inputValues.qtde.trim() === '') {
      toast.warning('Insira a quantidade.')
      return;
    }
    if (!inputValues.image) {
      toast.warning('Insira uma imagem.')
      return;
    }
    if (!inputValues.fk_categoriaId) {
      toast.warning('Selecione uma categoria.')
      return;
    }

    try {
      // Cria um objeto FormData e adiciona os campos a ele
      const formData = new FormData();
      formData.append('nome_item', inputValues.name);
      formData.append('qtdMin', inputValues.qtde);
      formData.append('foto', inputValues.image);
      formData.append('fk_categoriaId', inputValues.fk_categoriaId);

      const response = await app.post('/cadItem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Assegura que o Content-Type seja application/json
        }
      });
      toast.success('Produto adicionado');

      // Limpar os campos depois de enviar
      setInputValues({ name: '', qtde: '', image: null, fk_categoriaId: '' });
      setImgSrc('');

      if (!isSequentialAdd) {
        setTimeout(() => {
          setOpenModal(false); // Fechar modal depois do envio ser feito
        }, 2000);
      }

    } catch (error) {
      toast.error('Erro ao adicionar!');
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        setTimeout(() => {
          toast.error(error.response.data.message);
        }, 1000);
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
    setInputValues({ name: '', qtde: '', image: null, fk_categoriaId: '' });
    setImgSrc('');
    setOpenModal(false);
  };

  useEffect(() => {
    if (isOpen) {
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

  const [categorias, setCategorias] = useState([]);
  const fetchCategorias = () => {
    app.get('/categoria')
      .then(res => setCategorias(res.data))
      .catch(err => {
        console.error("Erro ao buscar categorias:", {
          message: err.message,
          response: err.response
        });
        toast.error("Erro ao buscar categorias.");
      });
  };

  return (
    <div>
      {isOpen && (
        <S.Overlay>
          <ToastContainer
            autoClose={3500} // Fechar automaticamente após 3,5 segundos
            closeOnClick // Fechar ao clicar na notificação
            newestOnTop // Colocar as notificações mais recentes em cima
            position="top-right" // Posição das notificações
            hideProgressBar // Esconder a barra de progresso
          />
          <S.Modal>
            <S.Overflow>
              <S.ContainerHeader>
                <S.header>
                  <S.TitleM>{title}</S.TitleM>
                  <S.Close onClick={handleCloseModal}><S.IconClose /></S.Close>
                </S.header>
              </S.ContainerHeader>

              <S.ContainerM>
                <S.Div>
                  <S.Form>
                    <S.Row1>
                      <S.Row1Div>
                        <S.Image>
                          <S.DivPreview id="DivPreview" className="preview-container">
                            <S.AddImage type="file" name="arquivo" id="img-input" accept="image/png, image/jpeg" />

                            {imgSrc ? <S.PreviewImage id="preview" src={imgSrc} onError={handleImageError} /> : null}
                          </S.DivPreview>
                        </S.Image>
  
                        <S.Row1Wrap> 
                          <S.Switch>
                            <S.SwitchText>Adicionar em sequência</S.SwitchText>
                              <label className="switch">
                                <input type="checkbox" id="switch" onChange={ToggleSwitch} />
                                <span className="slider round" />
                              </label>
                          </S.Switch>                                                 
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
                        </S.Row1Wrap>

                      </S.Row1Div>  

                    </S.Row1>

                    <S.Row2>
                      <S.Row2Content>
                        <S.Text>Categoria</S.Text>
                        <SelectBox
                          Title={'Selecione uma categoria'}
                          opsMap={categorias}
                          opId="cateId"
                          opName="nome_categoria"
                          onChange={value => setInputValues({ ...inputValues, fk_categoriaId: value })}
                          onFocus={fetchCategorias}
                          widthStyle={{ width: '20vw' }}
                        />
                      </S.Row2Content>

                      <S.Row2Content>
                        <S.Text>Quantidade mínima</S.Text>
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
                    </S.Row2>
                  </S.Form>
                </S.Div>

                <S.ContainerButton>
                  <ButtonConfirm
                    Title="Adicionar" color="white" width="150px" height="40px" backgroundColor="#38AD68" fontSize="15px"
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

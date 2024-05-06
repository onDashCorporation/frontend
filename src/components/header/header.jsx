import React, { useState, useEffect, useRef } from 'react';
import * as S from "./style";
import Input from "../../components/inputs/input";
import { useNavigate } from "react-router-dom";

const MAX_IMAGE_WIDTH = 300;
const MAX_IMAGE_HEIGHT = 300;

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width <= MAX_IMAGE_WIDTH && image.height <= MAX_IMAGE_HEIGHT) {
            setProfileImage(reader.result);
          } else {
            console.log("A imagem selecionada excede as dimensões máximas permitidas.");
            alert("A imagem selecionada excede as dimensões máximas permitidas.");
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setShowModal(true);
    setDropdownVisible(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveProfile = () => {
    // Lógica para salvar os dados do perfil
  };

  // Função para voltar para a página anterior
  const handleGoBack = () => {
    navigate(-1); // Retorna para a página anterior no histórico
  };

  return (
    <S.HeaderContainer>
      <S.ContainerLogo>  
        <S.Logo>Stock Box</S.Logo> 
      </S.ContainerLogo>
      <S.VoltarButton onClick={handleGoBack}>Voltar</S.VoltarButton>
      <S.IconContainer></S.IconContainer>
      <S.Areaconta>
        <S.TitlecontaWrapper onClick={toggleDropdown}>
          <S.FotoperfilContainer onClick={openModal}>
            {profileImage ? (
              <S.UploadIconConta>
                <S.UploadIconModalImg src={profileImage} alt="Foto de Perfil" />
              </S.UploadIconConta>
            ) : (
              <S.UploadIconConta />
            )}
          </S.FotoperfilContainer>
          <S.Titleconta>Conta</S.Titleconta>
        </S.TitlecontaWrapper>
        {dropdownVisible && (
          <S.Drop ref={dropdownRef}>
            <S.Perfil>
              <S.Perfiltext onClick={openModal}>Perfil</S.Perfiltext>
            </S.Perfil>
            <S.Cargo><S.Cargotext>Cargo</S.Cargotext></S.Cargo>
            <S.Sair><S.Sairtext onClick={() => navigate("/")}>Sair</S.Sairtext></S.Sair>
          </S.Drop>
        )}
      </S.Areaconta>
      {showModal && (
        <S.ModalBackground>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
            <S.ModalTitle>Editar Perfil</S.ModalTitle>
            <S.ImgTitle>Selecione Foto de Perfil</S.ImgTitle>
            <S.UploadInputContainer>
              <label htmlFor="upload-input">
                {profileImage ? (
                  <S.UploadIconModal>
                    <S.UploadIconModalImg src={profileImage} alt="Foto de Perfil" />
                  </S.UploadIconModal>
                ) : (
                  <S.UploadIconModal />
                )}
                <S.InputImg id="upload-input" type="file" accept="image/*" onChange={handleImageChange} />
              </label>
            </S.UploadInputContainer>

            <S.Nome>
              <Input label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            </S.Nome>
            <S.Email>
              <Input label="Endereço de Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </S.Email>

            <S.SaveButton onClick={handleSaveProfile}>Salvar</S.SaveButton>

          </S.ModalContent>
        </S.ModalBackground>
      )}
     
     
    </S.HeaderContainer>
  );
};

export default Header;






import React, { useState, useEffect, useRef } from 'react';
import * as S from "./style";
import Input from "../../components/inputs/input";
import { useNavigate } from "react-router-dom";
import BackButton from '../BackButton/BackButton';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MAX_IMAGE_WIDTH = 300;
const MAX_IMAGE_HEIGHT = 300;

const Header = ({ showBackButton }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tempProfileImage, setTempProfileImage] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfileImage = localStorage.getItem('profileImage');
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');

    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }

    if (storedName) {
      setName(storedName);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    }

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
            setTempProfileImage(reader.result);
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
    setTempProfileImage(profileImage);
    setShowModal(true);
    setDropdownVisible(false);
  };

  const closeModal = () => {
    setTempProfileImage(null);
    setShowModal(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSaveProfile = () => {
    if (tempProfileImage) {
      localStorage.setItem('profileImage', tempProfileImage);
      setProfileImage(tempProfileImage);
      toast.success('Imagem de perfil atualizada com sucesso!');
    }

    if (name && name.trim().length >= 3) {
      localStorage.setItem('name', name);
    } else if (name) {
      toast.error('O nome deve ter pelo menos 3 caracteres.');
      return;
    }

    if (email) {
      if (!validateEmail(email)) {
        toast.error('Por favor, insira um endereço de email válido.');
        return;
      }

      localStorage.setItem('email', email);
    }

    toast.success('Perfil atualizado com sucesso!');
    closeModal();
  };

  return (
    <S.HeaderContainer>
      <ToastContainer />
      <BackButton text="Voltar" showButton={showBackButton} />
      <S.ContainerLogo>
        <S.Logo>
          OnDash
        </S.Logo>
      </S.ContainerLogo>
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
            <S.Cargo>Cargo</S.Cargo>
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
                {tempProfileImage ? (
                  <S.UploadIconModal>
                    <S.UploadIconModalImg src={tempProfileImage} alt="Foto de Perfil" />
                  </S.UploadIconModal>
                ) : (
                  <S.UploadIconModal />
                )}
                <S.InputImg id="upload-input" type="file" accept="image/*" onChange={handleImageChange} />
              </label>
            </S.UploadInputContainer>
            <S.Desc>tamanho maximo: 300x300 px</S.Desc>
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





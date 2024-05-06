
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  background-color: transparent;
  border-bottom: 0.5px solid rgba(179, 178, 178, 0.2);

`;

export const ContainerLogo = styled.div`
 background-color:#f4f7ff;
 padding: 25px 35px;
 padding-right:62.2px;
 padding-bottom:40px;
  font-size: 25px;
  font-weight: bold;
  border-right: 0.5px solid rgba(179, 178, 178, 0.2);

`;

export const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const IconContainer = styled.div`
`;

export const Areaconta = styled.div`
  position: relative;
  margin-right: 10%;

`;

export const FotoperfilContainer = styled.div`
  position: relative;
`;

export const UploadInputContainer = styled.div`
  margin-left: 280px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: right;
`;

export const UploadIconModal = styled.div`
  margin-bottom: 20px;
  margin-left: -273px;
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden; /* Adiciona overflow hidden para esconder conteúdo que exceda as dimensões */
`;


export const UploadIconConta = styled.div`   
  margin-top: 0px;
  width: 40px;
  height: 40px;
  border: 1px solid #bab9b9;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  overflow: hidden; /* Esconde conteúdo que ultrapassa a moldura */
`;


export const Drop = styled.ul`
  list-style: none;
  display: block;
  position: absolute;
  top: 40px;
  left: 53px;
  background-color: #f4f7ff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;
  padding-left: 6px;
 
`;

export const Titleconta = styled.a`
  text-decoration: none;
  padding-left: 20px;
  margin-left: 10px;
  margin-right: -90%;
  &:hover {
    color: #277dff;
    cursor: pointer; 
  }
`;

export const Perfil = styled.li`
  padding-bottom: 15px;
`;

export const Cargo = styled.li`
  padding-bottom: 15px;
`;

export const Sair = styled.li`
  padding-bottom: 5px;
`;

export const Perfiltext = styled.a`
  text-decoration: none;
  padding: 5px;
  margin-left: 5px;
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 5px;
  &:hover {
    color: #277dff;
    background-color: #ffff;
    cursor: pointer;
  }
`;

export const Cargotext = styled.a`
  text-decoration: none;
  padding: 5px;
  margin-left: 5px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 5px;
  &:hover {
    color: #277dff;
    background-color: #ffff;
    cursor: pointer;
  }
`;

export const Sairtext = styled.a`
  text-decoration: none;
  padding: 5px;
  margin-left: 5px;
  padding-left: 6px;
  padding-right: 21px;
  border-radius: 5px;
  &:hover {
    color: #277dff;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
 z-index: 10;

`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 70px;
  width: 580px;
`;

export const CloseButton = styled.button`
  margin-top: -45px;
  margin-right: -35px;
  float: right;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #bab9b9;
`;

export const ModalTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 42px;
  margin-right: 15px;
  margin-left: 370px;
`;

export const ImgTitle = styled.h2`
  font-size: 20px;
  margin-top: -70px;
  margin-right: 350px;
  margin-bottom: 55px;
`;

export const SaveButton = styled.button`
  background-color: #277dff;
  color: #fff;
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 403px;
`;

export const Nome = styled.div`
  margin-top: -220px;
  padding-bottom: 40px;
  margin-left: 348px;
`;

export const Email = styled.div`
  padding-bottom: 35px;
  margin-left: 348px;
`;

export const UploadIconModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadIconContaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitlecontaWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputImg = styled.input`
  display: none;
`;

export const VoltarButton = styled.button`
  background-color: transparent;
  color:  #bab9b9;
  border: none;
  margin-left:300px;
  margin-bottom:-10px;
  position:absolute;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color:#277dff;
  }
`;

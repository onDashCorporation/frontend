
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  /* background-color: #f4f7ff; */
  background-color: #ffff;
  border-bottom: 0.5px solid rgba(179, 178, 178, 0.2);
`;

export const ContainerLogo = styled.text`
  margin-left: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const Logo = styled.text`
  margin-left: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const IconContainer = styled.div``;

export const Areaconta = styled.div`
position: relative;
margin-right: 10%;
margin-bottom: 10px;
margin-top:10px;
`;

export const FotoperfilContainer = styled.div`
  position: relative;
  
`;

// export const Fotoperfil = styled.img`
//  margin-bottom: 20px;
//   margin-left: 40px;
//   margin-top: 20px;
//   width: 200px;
//   height: 200px;
//   border: 2px dashed #ccc;
//   border-radius: 5%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   overflow: hidden;
// `;

export const UploadInputContainer = styled.div`
  margin-left: 280px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: right;
`;

export const UploadIconModal = styled.div`
  margin-bottom: 20px;
  margin-left: 40px;
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`;


export const Drop = styled.ul`
  list-style: none;
  display: block;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #f4f7ff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;
  padding-left: 6px;
  z-index: 1;
`;

export const Titleconta = styled.a`
text-decoration: none;
  padding-left: 20px;
   margin-left: 40px;
   margin-right:-80px;
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
  padding: 10px;
  margin-left: 10px;
  padding-left: 25px;
  padding-right: 29px;
  border-radius: 5px;
  &:hover {
    color: #277dff;
    background-color: #ffff;
    cursor: pointer;
  }
`;

export const Cargotext = styled.a`
  text-decoration: none;
  padding: 10px;
  margin-left: 10px;
  padding-left: 25px;
  padding-right: 26px;
  border-radius: 5px;
  &:hover {
    color: #277dff;
    background-color: #ffff;
    cursor: pointer;
  }
`;

export const Sairtext = styled.a`
  text-decoration: none;
  padding: 10px;
  margin-left: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  &:hover {
    color: #277dff;
    background-color: #ffff;
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
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 70px;
  width: 580px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ffff;
`;

export const ModalTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 42px;
  margin-left: 15px;
`;

export const ImgTitle = styled.h2`
  font-size: 20px;
  margin-top: -70px;
  margin-left: 310px;
  margin-bottom: 55px;
`;

export const SaveButton = styled.button`
  background-color: #277dff;
  color: #fff;
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 55px;
`;

export const Nome = styled.div`
  margin-top: -220px;
  padding-bottom: 35px;
`;

export const Email = styled.div`
  padding-bottom: 35px;
`;

export const UploadIconConta = styled.div`   
margin-top:0px;
width: 40px;
height: 40px;
border: 1px solid #bab9b9;
border-radius: 50%;
display: flex;
cursor: pointer;
`;
export const TitlecontaWrapper = styled.div`
display: flex;
align-items: center;
`;
 export const InputImg = styled.input`
 display:none;
 `;
export const Fotoperfil = styled.img`
width: ${props => (props.small ? '40px' : 'auto')};
height: ${props => (props.small ? '40px' : 'auto')};
border-radius: ${props => (props.small ? '50%' : '0')}
`;

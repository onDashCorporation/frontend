import styled from "styled-components";
import { Xmark, Upload } from "iconoir-react";

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EBEBEB;
  width: 70vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;


export const ContainerHeader = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
export const TitleM = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;
export const Close = styled.button`
  background-color: rgba(0,0,0,0.0);
  cursor: pointer;
`;
export const IconClose = styled(Xmark)`
 color: #ff0000;
 width: 2rem;
 height: 2rem;
`;

export const ContainerM = styled.div`
  width: 90%;
  margin: 1.5% 5% 0% 5%;
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;



export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
export const Row1Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
    //display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 2rem;
    align-items: center;
    //align-content: center;
    //padding: 4rem;
    min-width: 250px;
    //width: 60%;
    //flex-wrap: wrap;

    height: 200px;
    background-color: #D9D9D9;
    border-radius: 5px;
`;
export const DivPreview = styled.div`
    //display: flex;
    position: absolute;

    width: 250px;
    height: 200px;

    border-radius: 5px;
`;
export const PreviewImage = styled.img`
    width: 250px;
    height: 200px;
    object-fit: cover;

    border-radius: 5px;
`;
export const UploadDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  align-items: center;
  justify-content: center;
  //align-content: center;
`
// export const IconUpload = styled(Upload)`
//   display: flex;
//   color: #000;
//   width: 5rem;
//   height: 5rem;
// `;
export const AddImage = styled.input`
  display: flex;
  position: absolute;
  width: 10rem;
  //height: 7rem;
  font-size: 7rem;

  opacity: 0;
  z-index: 2;
`;

export const Row1Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Row1Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const NameInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  padding: 0.8rem;
  background-color: #D9D9D9;
  outline: none;
  margin-bottom: 1rem;
  border-radius: 5px;

  //width: 100%;
`;
export const CategoryInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  padding: 0.8rem;
  background-color: #D9D9D9;
  outline: none;
  margin-bottom: 1rem;
  border-radius: 5px;

  //width: 70%;
`;

export const Switch = styled.div`
  margin-left: 1rem;
  //display: flex;
  //align-items: center;
  //align-content: center;
  justify-content: right;
  //gap: 0.5rem;

  width: 211px;
`;
export const SwitchText = styled.text`
  font-weight: 400;

  color: #6F6F6F;
  margin-right: 0.5rem;
  text-align: right;
  //min-width: 100px;
  //text-wrap: nowrap;
`;
export const SwitchCheckbox = styled.div`

`;


export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    //align-items: center;
    //margin-top: 20px;
`;
export const Row2Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Text = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  text-transform: capitalize;
`;
export const Inputs = styled.input`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  padding: 0.8rem;
  background-color: #D9D9D9;
  outline: none;
  margin-bottom: 1rem;
  border-radius: 5px;
  gap: 2rem;

  //width: 20%;
`;

export const Textarea = styled.textarea`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  border-radius: 5px;
  padding: 1rem;
  background-color: #D9D9D9;
  resize: none;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
`;
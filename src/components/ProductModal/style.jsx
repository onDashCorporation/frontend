import styled from "styled-components";
import { Xmark } from "iconoir-react";

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
  max-height: 90vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
export const Overflow = styled.div`
  width: 69.8vw;
  overflow-y: auto;
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
`;
export const Row1Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

export const Image = styled.div`
    //display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 2rem;
    align-items: center;
    min-width: 250px;
    border: 2px dashed #ccc;

    height: 200px;
    border-radius: 5px;
`;
export const DivPreview = styled.div`
    display: flex;
    position: relative;
    justify-content: center;

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
export const AddImage = styled.input`
  position: absolute;
  width: 100%;
  font-size: 10rem;
  opacity: 0;
`;

export const Row1Wrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  //gap: 1rem;
  /* justify-content: space-around; */

  align-items: end;
  justify-content: start;
`;
export const Row1Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* align-items: end;
    justify-content: start; */
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

  /* align-items: end; */

  //width: 100%;
`;

export const Switch = styled.div`
  margin-left: 1rem;
  justify-content: right;

  width: 211px;
`;
export const SwitchText = styled.text`
  font-weight: 400;

  color: #6F6F6F;
  margin-right: 0.5rem;
  text-align: right;
`;
export const SwitchCheckbox = styled.div`

`;


export const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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

  max-width: 80%;
  min-width: 40%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
`;
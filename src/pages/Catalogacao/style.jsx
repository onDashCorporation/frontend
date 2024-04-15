import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Main = styled.div`
  display: flex;
`;
export const Container = styled.div`
  background-color: #FBFCFD;
  overflow-y: auto;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  gap: 20px;
  //align-items: center;

  display: flex;
`;
export const ContainerModal = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;

  width: 84%;
  background-color: #dce8f5;
  align-items: left;
  flex-direction: column;
`;
export const Modal = styled.div`
  //overflow-y: auto;
  width: 100%;
  //height: 90vh;
  //flex-direction: column;
  //background-color: rgba(0, 0, 0, 0.5);
  //gap: 20px;
  //align-items: center;
  justify-content: center;

  display: flex;
`;

export const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: #EBEBEB;
  width: 100%;
  //height: 100px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  /* top | right | bottom | left */
  padding: 1.5% 5% 1.5% 5%;
`;
export const Title = styled.h1`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-transform: capitalize;

  color: #000000;
`;
export const HeaderM = styled.h2`
  display: flex;
  justify-content: space-between;
`
export const TitleM = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;

  color: #000000;
`;
export const Text = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 15px;

  color: #000000;
`;

export const Input = styled.input`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  font-size: 15px;

  color: #000000;

  //width: 100%;

  /* top | right | bottom | left */
  padding: 1rem;
  background-color: #D9D9D9;
  outline: none;
  text-transform: capitalize;

  width: 40%;
`
export const FooterM = styled.div`
`
export const Textarea = styled.textarea`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  font-size: 15px;

  color: #000000;
  text-transform: capitalize;

  width: 40%;

  /* top | right | bottom | left */
  padding: 1rem;
  background-color: #D9D9D9;
  resize: none;
`
export const Switch = styled.div`
  display: flex;
  justify-content: right;
`
export const SwitchText = styled.text`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;

  color: #6F6F6F;
`


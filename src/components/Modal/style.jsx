import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
`;
export const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: #EBEBEB;
  width: 60%;
  //height: 100px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  /* top | right | bottom | left */
  padding: 1.5% 5% 1.5% 5%;

  /* top: 50%; right: 50%;
  transform: translate(50%,-50%); */
  margin-left: auto;
  margin-right: auto;
`;
export const HeaderM = styled.h2`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  background-color: red;
  border-radius: 100px;
  width: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
`;
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


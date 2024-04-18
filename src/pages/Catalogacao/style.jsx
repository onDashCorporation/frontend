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
export const Title = styled.h1`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-transform: capitalize;

  color: #000000;
`;

export const Button = styled.button`
  background-color: #dce8f5;
  border-radius: 5px;
  border: none;
  cursor: pointer;
    //background-color: ;
`;


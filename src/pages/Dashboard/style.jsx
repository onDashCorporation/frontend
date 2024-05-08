import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const test = styled.div`
  display: flex;
`;
export const Container = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const LibConatiner = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
  width: 100%;

  
`;
export const Lib = styled.div`
height: 350px;
width: 500px ; 

`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 90%;
  gap: 20px;
`;
export const Option = styled.div`
margin-left: 150PX;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
export const Op = styled.button`
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: #d9d9d9;
  cursor: pointer;
  background-color: ${(props) =>
    props.select === "true" || props.select === "false"
      ? "#277DFF"
      : "#d9d9d9"};
  color: ${(props) =>
    props.select === "true" || props.select === "false"
      ? "#ffffff"
      : "#000000"};
`;
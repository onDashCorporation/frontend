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
export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
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
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;
export const SectionContainer = styled.div`
display: flex;
flex-direction: column;
width: 90%;
gap: 20px;

`;
export const ConatinerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
/* gap: 10px; */
width: 50%;
height: 350px;

`;
export const ContainerGrafic = styled.div`
width: 90%;
display: flex;
flex-direction: row;
gap: 50px;
`;
export const Option = styled.div`
  display: flex;
  flex-direction: row;
 align-items: center;
 justify-content: left;
  width: 31%;
  background-color: #d9d9d9;
  padding: 5px;
  border-radius: 5px;
  gap: 15px;
`;
export const Op = styled.button`
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: #d9d9d9;
  color: black;
  cursor: pointer;
  transition:  all 0.3s ease ;
  background-color: ${(props) =>{
    switch (props.select) {
      case "true":
        return "#ffffff";
      case "false":
        return "#ffffff";
      case "mov":
        return "#ffffff";
      default:
        return "#d9d9d9";
    }
  }}
 `;  
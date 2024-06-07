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
  height: 93vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    background-color: #fafafa;


`;
export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const LibConatiner = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
  width: 100%;

  
`;
export const Lib = styled.div`
/* display: flex; */
/* align-items: center; */
justify-content: center;
height: 400px;
width: 100%; 

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
flex-wrap: wrap;
gap: 10px;
justify-content: center;
width: 50%;
height: fit-content;


`;
export const ContainerGrafic = styled.div`
width: 90%;
display: flex;
flex-direction: row;
/* align-items: start; */
justify-content: space-between;
background-color: #ffffff;
  border: 0.5px solid  #e0e0e0;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition:  all 0.3s ease;
  -webkit-box-shadow: 1px 5px 17px -7px rgba(173, 170, 173, 0.98);
  -moz-box-shadow: 1px 5px 17px -7px rgba(173, 170, 173, 0.98);
  box-shadow: 1px 5px 17px -7px rgba(173, 170, 173, 0.98);

`;
export const ConatinerBottom = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
export const Radar = styled.div`
display: flex;
flex-direction: column;
align-items: start;
  background-color: #ffffff;
  border: 0.5px solid  #e0e0e0;
  width: 300px;
  height: fit-content;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition:  all 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }


`;
export const RadarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000000;

`;
export const Option = styled.div`
  display: flex;
  flex-direction: row;
 align-items: center;
 justify-content: left;
  width: 400px;
  background-color: #d9d9d9;
  padding: 5px;
  border-radius: 5px;
  gap: 15px;
`;
export const Op = styled.button`
width: 100%;
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
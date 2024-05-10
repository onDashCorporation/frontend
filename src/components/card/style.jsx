import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: start;

  background-color: #ffffff;
  border: 0.5px solid  #e0e0e0;
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition:  all 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
  /* &:active {
    transform: scale(99%);
    transition: transform 0.3s ease;
    background-color: #000000;
    
  } */
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000000;

`;
export const Info = styled(Title)`
font-size: 20px;
/* color: #169727; */

`;
export const Sub = styled(Title)`
font-size: 15px;
color: #797676;
`;
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;

  background-color: #ffffff;
  border: 0.5px solid  #e0e0e0;
  width: 300px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition:  all 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
`;
export const Title = styled.div`
  font-size: 1vw;
  font-weight: bold;
  color: #000000;
  word-wrap: break-word;

`;
export const Info = styled(Title)`
font-size: 1.6vw;

`;
export const Sub = styled(Title)`
font-size: 15px;
color: #797676;
`;
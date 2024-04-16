import styled from "styled-components";
import * as I from "iconoir-react"


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const ViewOp = styled.button`
    display: flex;
    align-items: center;
    justify-content: center ;
    background-color:  #777777;
    width: 33%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const ButtonUp = styled(I.Plus)`
  width: 20px; 
  height: 20px;
`;

export const ButtonDown = styled(I.Minus)`
  width: 20px; 
  height: 20px;
`;

export const ViewText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center ;
  align-items: center;
  border: none;
  width: 44%;
`;

export const NumberText = styled.text`
  display: flex;
  text-align: center;
  color: black;
  height: 100%;
  font-size: 16px;
  `;
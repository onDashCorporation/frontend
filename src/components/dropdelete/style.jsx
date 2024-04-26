import styled from "styled-components";
import * as I from "iconoir-react"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    user-select: none;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-radius: 10px;
    width: 50%;
`;
export const More = styled(I.MoreHoriz)`
width: 30px;
/* margin-right: 50px; */
`;
export const Button = styled.div` 
/* width: 70px; */
  padding: 10px;
  border: none;
  cursor: pointer;


`;
export const ContainerOp = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    z-index: 1;
    left: 60px;
    color: #333;
    width: 70px;
    padding: 5px;
    text-align: left;
    border-radius: 5px;
    -webkit-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
-moz-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
`;
export const Op = styled.text`
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
    background-color: #e0e8f0;
}
`;


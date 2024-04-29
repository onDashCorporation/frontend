import styled from "styled-components";
import * as I from 'iconoir-react';
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    user-select: none;
    align-items: center;
    justify-content: center;
    border-radius: 10px;


`;
export const Title = styled.text`
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    /* border: 1px solid rgb(221, 221, 221); */
    background-color: #ffff;

    border-radius: 5px;
    font-size: 15px;
    /* font-weight: bold; */
    color: #333;
    cursor: pointer;
    transition: border-color 0.3s ease;
    transition: all 0.3 ease;
    border: 1px solid ${props => props.isActive ? '#4e8fd9' : 'rgb(221, 221, 221)'};

`;
export const ContainerOp = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 110%;
    background-color: #ffffff;
    font-weight: 500;
    color: #333;
    width: 100%;
    border-radius: 5px;
    padding: 10px 0px;
    -webkit-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
    -moz-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
    box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);

`;
export const Op = styled.text`
    font-size: 14px;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
    background-color: #e0e8f0;
}
`;
export const IconConatiner = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-items: center;

`;
export const Trash = styled(I.XmarkCircle)`
    transition: color 0.4s ease;
    color:  ${props => props.isActive ? '#4e8fd9' : 'rgb(221, 221, 221)'};
    width: 20px;



`;
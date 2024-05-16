import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  max-height: 900px;
  background-color: #ffff;
  border-right:  0.5px solid rgba(179, 178, 178, 0.2);
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const OpConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 30px;
  margin-top: 15px;
  width: 90%;
  user-select: none;
`;
export const Op = styled.text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  padding-left: 10px;
  width: 90%;
  height: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #ffffff;
    font-weight: 500;
    
    border-radius: 5px;
    background-color: #277DFF;
  }
`;

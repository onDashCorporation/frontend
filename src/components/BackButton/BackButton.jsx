import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ text, showButton }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Retorna para a página anterior no histórico
  };

  return showButton ? <S.VoltarButton onClick={handleGoBack}>{text}</S.VoltarButton> : null;
};

export default BackButton;
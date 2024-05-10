import * as S from "./style";

const Card = ({ Title,Info, SubTitle, sub }) => {
  return (
      <S.Container >
        <S.Title>{Title}</S.Title>
        <S.Info>{Info}</S.Info>
       {sub === true && <S.Sub>{SubTitle}</S.Sub>}
      </S.Container>
  );
};
export default Card;

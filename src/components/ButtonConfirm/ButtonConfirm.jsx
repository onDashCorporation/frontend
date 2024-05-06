import * as S from "./style";

const ButtonConfirm = ({ Title, onClick, backgroundColor, color, active, width, height, fontSize, padding  }) => {
  return (
      <S.Button onClick={onClick} style={ ""||{backgroundColor: backgroundColor, color: color, active: active, width: width, height: height, fontSize: fontSize, padding: padding}}  >
        {Title}
      </S.Button>
  );
};
export default ButtonConfirm;

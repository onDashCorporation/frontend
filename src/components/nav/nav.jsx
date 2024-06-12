import * as S from "./style";
import { useNavigate, useLocation } from "react-router-dom";


const Nav = () => {
  const nav = useNavigate();
  const location = useLocation();


  return (
    <S.Container>
      <S.OpConatiner>
        <S.Op onClick={() => {nav("/dashboard")}}
        isSelected={location.pathname === "/dashboard"}
        >DashBoard</S.Op>
        <S.Op onClick={() => {nav("/solicitacoes")}}
        isSelected={location.pathname === "/solicitacoes"} 
        >Solicitações</S.Op>
        <S.Op onClick={() => {nav("/controle")}}
        isSelected={location.pathname === "/controle"} 
        >Controle</S.Op>
        {/* <S.Op onClick={() => {nav("/relatorios")}}
        isSelected={location.pathname === "/relatorios"} 
        >Relatorios</S.Op> */}
        {/* <S.Op onClick={() => {nav("/catalogacao")}}
        isSelected={location.pathname === "/catalogacao"} 
        >Catalogação</S.Op> */}
      </S.OpConatiner>
    </S.Container>
  );
};
export default Nav;

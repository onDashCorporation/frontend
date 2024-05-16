import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useLocation } from 'react-router-dom';
const Relatorios = () => {
  const location = useLocation();
  const showBackButton = location.pathname == '/relatorios';
  return (
    <S.Body>
      <Header showBackButton={showBackButton} />
      <S.Main>
        <Nav />
        <S.Container>
          <S.IN>Relatorios</S.IN>
      
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Relatorios;

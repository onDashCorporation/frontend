import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";

const Catalogacao = () => {
  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />

        <S.Container>

          <S.Title>catalogacao/Adicionar departamento</S.Title>
          
          <S.ContainerModal>
            <S.Title>Adicionar departamento</S.Title>

            <S.Modal>
              <S.Div>

                <S.HeaderM>
                  <S.TitleM>Informações do departamento:</S.TitleM>
                  
                  <S.Switch>
                    <S.SwitchText>Adiconar em sequência</S.SwitchText>
                  </S.Switch>

                </S.HeaderM>

                <S.Text>Nome</S.Text>
                <br/>
                <S.Input required/>

 <S.FooterM> {/* PAREI AQUIIIIIIIIIIIIIIIIIII ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

</S.FooterM>
                <S.Text>Descrição</S.Text>
                <br/>
                {/* <S.Input/> */}
                <S.Textarea rows="5" maxlength="130"/>

              </S.Div>
            </S.Modal>
          </S.ContainerModal>

        </S.Container>

      </S.Main>
    </S.Body>
  );
};

export default Catalogacao;

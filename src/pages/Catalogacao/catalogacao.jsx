import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";

import { useState } from 'react';
// import { Modal } from '../../components/Modal/Modal.jsx'
import Modal from '../../components/Modal/Modal.jsx'

const Catalogacao = () => {
  const [open, setOpen] =  useState(false);
  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />

        <S.Container>

        {/* <button onClick={() => setOpen(!open)}>Clique para abrir</button> */}

          <S.Title>catalogacao/Adicionar departamento</S.Title>
          
          <S.ContainerModal>
            <S.Title>Adicionar departamento</S.Title>
            <div>
            <S.Button onClick={() => setOpen(true)}>Abrir modal</S.Button>
            </div>
            <S.Modal>
              
              {/* <Modal isOpen={setOpen} title={'Informações do Departamento'}/> */}
              <Modal isOpen={open} setOpenModal={() => setOpen(!open)}/>

            </S.Modal>
          </S.ContainerModal>

        </S.Container>

      </S.Main>
    </S.Body>
  );
};

export default Catalogacao;

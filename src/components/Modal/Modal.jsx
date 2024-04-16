import * as S from "./style"
import React from 'react'
import { IconoirProvider, Xmark } from 'iconoir-react';

export default function Modal({isOpen, setOpenModal}) {
  if (isOpen) {
    return(

      <S.Overlay>

        <S.Modal>

          {/* Close */}
          <IconoirProvider
            iconProps={{
              color: '#000',
              strokeWidth: 1.5,
              width: '2rem',
              height: '2rem',
            }}
          >
            {/* icon xmark */}
            <S.Close onClick={(setOpenModal)}><Xmark /></S.Close>
          </IconoirProvider>

          {/* Header Modal */}
          <S.HeaderM>

            <S.TitleM>Informações de Departamento</S.TitleM>
              
            <S.Switch>
              <S.SwitchText>Adiconar em sequência</S.SwitchText>
            </S.Switch>

          </S.HeaderM>

            <S.Div>

              <S.Form>
                {/* Campo nome */}
                <S.Text>Nome</S.Text>
                
                <S.Input required/>

                {/* Campo Descrição */}
                <S.Text>Descrição</S.Text>
                
                <S.Textarea rows="5" maxlength="130"/>
              </S.Form>


              <S.AddButton onClick={console.log('clicou')}>
                Adicionar
              </S.AddButton>

            </S.Div>

        </S.Modal>

      </S.Overlay>
  
    )
  }
  return null
}

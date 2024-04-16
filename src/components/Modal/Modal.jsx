import * as S from "./style"
import React from 'react'

export default function Modal({isOpen, setOpenModal}) {
  if (isOpen) {
    return(

      <S.Overlay>

        <S.Div>
          
          <S.HeaderM>

            {/* <S.Button onClick={() => setOpen(true)}>Abrir modal</S.Button> */}
            <S.Button onClick={(setOpenModal)}>X</S.Button>
            {/* Testando */}
            {/* <S.Button onClick={() => console.log('feche')}>X</S.Button> */}
            <S.TitleM>Informações de Deparatamento</S.TitleM>
              
            <S.Switch>
              <S.SwitchText>Adiconar em sequência</S.SwitchText>
            </S.Switch>

          </S.HeaderM>

          <S.Text>Nome</S.Text>
          <br/>
          <S.Input required/>


          <S.Text>Descrição</S.Text>
          <br/>
          {/* <S.Input/> */}
          <S.Textarea rows="5" maxlength="130"/>

        </S.Div>

      </S.Overlay>
  
    )
  }
  return null
}

// export function Modal2(isOpen, title) {
//   if (isOpen) {
//       return(

//           <S.Div>

//               <S.HeaderM>
//                 <S.TitleM>{title}</S.TitleM>
                
//                 <S.Switch>
//                   <S.SwitchText>Adiconar em sequência</S.SwitchText>
//                 </S.Switch>

//                 <button onClick={() => setOpen(!isOpen)}>Fechar</button>

//               </S.HeaderM>

//               <S.Text>Nome</S.Text>
//               <br/>
//               <S.Input required/>


//               <S.Text>Descrição</S.Text>
//               <br/>
//               {/* <S.Input/> */}
//               <S.Textarea rows="5" maxlength="130"/>

//             </S.Div>

//       )
//   }
//   else{
//       return <></>
//   }
// }

// class Modal extends React.Component {
//   render() {
//     return <div>Hello {this.props.title}</div>;
//   }
// }

     
// export function Modal2({ isOpen, setOpen, title} : IModal) {
//     if (isOpen) {
//         return(

//             <S.Div>

//                 <S.HeaderM>
//                   <S.TitleM>Informações do departamento:</S.TitleM>
                  
//                   <S.Switch>
//                     <S.SwitchText>Adiconar em sequência</S.SwitchText>
//                   </S.Switch>

//                 </S.HeaderM>

//                 <S.Text>Nome</S.Text>
//                 <br/>
//                 <S.Input required/>

//  <S.FooterM> {/* PAREI AQUIIIIIIIIIIIIIIIIIII ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

// </S.FooterM>
//                 <S.Text>Descrição</S.Text>
//                 <br/>
//                 {/* <S.Input/> */}
//                 <S.Textarea rows="5" maxlength="130"/>

//               </S.Div>

//         )
//     }
//     else{
//         return <></>
//     }
// }
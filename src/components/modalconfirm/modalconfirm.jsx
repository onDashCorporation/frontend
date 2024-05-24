import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";

const ModalConfirm = ({isOpen, setOpenModal, Title,Info}) => {
    if (isOpen){
        return( <S.Body >
            <S.Container >
                <S.ContainerInfo>
                <S.Title>{Title}</S.Title>
                <S.Info>{Info}
                </S.Info>
                </S.ContainerInfo>
                <S.ButtonContainer>
                <ButtonConfirm onClick={setOpenModal} Title="OK" width="400px" height="48px" backgroundColor="green" fontSize="20px"/>
                </S.ButtonContainer>
           </S.Container>
            </S.Body>)
    }
}
export default ModalConfirm;


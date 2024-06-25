import * as S from "./style"
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";

const ModalDelete = ({isOpen, setOpenModal, Title,Info, onClick1}) => {
    if (isOpen){
        return( <S.Body >
            <S.Container >
                <S.ContainerInfo>
                <S.Title>{Title}</S.Title>
                <S.Info>{Info}
                </S.Info>
                </S.ContainerInfo>
                <S.ButtonContainer>
                <ButtonConfirm color="#fff" onClick={setOpenModal} Title="Não" width="174px" height="48px" backgroundColor="#999898" fontSize="20px"/>
                <ButtonConfirm color="#fff" onClick={onClick1  || ""} Title="Sim" width="174px" height="48px" backgroundColor="#277DFF" fontSize="20px"/>
                </S.ButtonContainer>
           </S.Container>
            </S.Body>)
    }
}
export default ModalDelete;


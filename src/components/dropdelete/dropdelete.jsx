import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style"

const DropDelete = ({  onClickOP1, onClickOP2}) => {

    const [isActive, setIsActive] = useState(false);
    const nav = useNavigate();




return(
    <S.Container>
        <S.Button onClick={(e) => setIsActive(!isActive)}>
            <S.More/>
        </S.Button>
        {isActive && (
            <S.ContainerOp>
                <S.Op onClick={onClickOP1}>Visualisar</S.Op>
                <S.Op onClick={onClickOP1}>Editar</S.Op>
                <S.Op onClick={onClickOP2}>Delete</S.Op>
            </S.ContainerOp>
        )}  
    </S.Container>


);
}
export default DropDelete;
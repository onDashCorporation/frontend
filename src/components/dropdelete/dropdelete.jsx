import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style"

const DropDelete = ({  onClickOP1, onClickOP2, onClickOP3, Vizu, Mix, Mix1, op, }) => {

    const [isActive, setIsActive] = useState(false);
    const nav = useNavigate();




return(
    <S.Container>
        <S.Button onClick={(e) => setIsActive(!isActive)}>
            <S.More/>
        </S.Button>
        {isActive && (
            <S.ContainerOp>
                {Vizu == true ? (<S.Op onClick={onClickOP3}>Visualisar</S.Op>): (<div></div>)}
                {Mix == true ? (<S.Op onClick={onClickOP1}>Editar</S.Op>
                ): (<div></div>)}
                {Mix1 == true ? (
                <S.Op onClick={onClickOP2}>{ op || "Delete"}</S.Op>): (<div></div>)}
                
            </S.ContainerOp>
        )}  
    </S.Container>


);
}
export default DropDelete;
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style"

const Dropdown = ({  Title }) => {

    const [isActive, setIsActive] = useState(false);
    const nav = useNavigate();




return(
    <S.Container>
        <S.Button onClick={(e) => setIsActive(!isActive)}>
            {Title}
        </S.Button>
        {isActive && (
            <S.ContainerOp>
                <S.Op onClick={e => {nav("/pedidos"), setIsActive(false)}}>Entrada</S.Op>
                <S.Op onClick={e => {nav("/pedidos"), setIsActive(false)}}>Saida</S.Op>
            </S.ContainerOp>
        )}  
    </S.Container>


);
}
export default Dropdown;
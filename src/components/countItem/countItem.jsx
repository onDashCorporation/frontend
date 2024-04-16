import * as S from "./style"
import React, { useState } from 'react';


const CountItem = () => {
    const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  };
  
  const decreaseCount = () => {
   if(count > 0){
    setCount(count - 1)
    }
  };

    return(
    <S.Container>
      <S.ViewOp onClick={decreaseCount}>
        <S.ButtonDown/>
      </S.ViewOp>
      <S.ViewText>
        <S.NumberText>{String(count).padStart(2, '0')}</S.NumberText>
      </S.ViewText>
      <S.ViewOp onClick={increaseCount}>
        <S.ButtonUp/>
      </S.ViewOp>
    </S.Container>
    )
}
export default CountItem;
import * as S from "./style"

// const SelectBox = ({ onFocus, onChange, Title, opsMap, key, value, opTitle }) => {

//     return( 
//           <select 
//             onFocus={onFocus}
//             onChange={onChange}
//           >
//             <option value="" style={{ color: 'gray' }}>{Title}</option>
//             {opsMap.map(op => (
//               <option key={op[key]} value={op[value]}>{op[opTitle]}</option>
//             ))}
//           </select>
//     );
// }
// export default SelectBox;


// Estilizando - ESTATICO:
// import app from "../../services/api_login";
// import { useState } from "react";
// const SelectBox = () => {

//   const cargosStatic = [
//     { cargoId: 1, cargo_nome: 'Auxiliar' },
//     { cargoId: 2, cargo_nome: 'Gerente' }
//   ];

//   const [ values , setValues] = useState({
//     usuNome: '',
//     email: '',
//     senha: '',
//     fk_cargoId: '',
//     fk_depId: ''
//   })

//   const fetchCargos = () => {
//     app.get('/cargo')
//       .then(res => setCargos(res.data))
//       .catch(err => {
//         console.error("Erro ao buscar cargos:", {
//           message: err.message,
//           response: err.response
//         });
//         toast.error("Erro ao buscar cargos.");
//       });
//   };

//     return( 
//     <S.Select className="custom-select"
//       onFocus={fetchCargos}
//       onChange={e => setValues({ ...values, fk_cargoId: e.target.value })}
//     >
//       <option value="" style={{ color: 'gray' }}>Selecione argo</option>
//       {cargosStatic.map(cargo => (
//         <option key={cargo.cargoId} value={cargo.cargoId}>{cargo.cargo_nome}</option>
//       ))}
//     </S.Select>
//     );
// }
// export default SelectBox;


//CHAT GPT - ESTATICO:
import React, { useState } from 'react';

const SelectBox = () => {
  const cargosStatic = [
    { cargoId: 1, cargo_nome: 'Auxiliar' },
    { cargoId: 2, cargo_nome: 'Gerente' }
  ];

  const [values, setValues] = useState({
    usuNome: '',
    email: '',
    senha: '',
    fk_cargoId: '',
    fk_depId: ''
  });

  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  // Removido fetchCargos, pois não será mais utilizado

  const handleSelectClick = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(cargosStatic.find(cargo => cargo.cargoId === value).cargo_nome);
    setIsActive(false);
    setValues({ ...values, fk_cargoId: value });
  };

  return (
    <S.SelectContainer className="custom-select">
      <S.HiddenSelect
        onChange={e => setValues({ ...values, fk_cargoId: e.target.value })}
      >
        <option value="" style={{ color: 'gray' }}>Selecione cargo</option>
        {cargosStatic.map(cargo => (
          <option key={cargo.cargoId} value={cargo.cargoId}>{cargo.cargo_nome}</option>
        ))}
      </S.HiddenSelect>


      <S.SelectSelected
        className={isActive ? 'select-arrow-active' : ''}
        onClick={handleSelectClick}
      >
        {selectedValue || 'Selecione cargo'}
      </S.SelectSelected>

      <S.SelectItems className={isActive ? '' : 'select-hide'}>
        {cargosStatic.map(cargo => (
          <div key={cargo.cargoId} onClick={() => handleOptionClick(cargo.cargoId)}>
            {cargo.cargo_nome}
          </div>
        ))}
      </S.SelectItems>
      
    </S.SelectContainer>
  );
};

export default SelectBox;



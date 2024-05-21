import React, { useState } from 'react';
import * as S from "./style";

const SelectBox = ({ Title, opsMap, opName, onChange, opId, onFocus }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectClick = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (value) => {
    const selectedOption = opsMap.find(op => op[opId] === value);
    setSelectedValue(selectedOption[opName]);
    setIsActive(false);
    onChange(value);
  };

  return (
    <S.SelectContainer className="custom-select">
      <S.HiddenSelect onChange={onChange} onFocus={onFocus}>
        <option value="" style={{ color: 'gray' }}>{Title}</option>
        {opsMap.map(op => (
          <option key={op.cargoId} value={op.cargoId}>{op[opName]}</option>
        ))}
      </S.HiddenSelect>

      <S.SelectSelected
        className={isActive ? 'select-arrow-active' : ''}
        onClick={handleSelectClick}
      >
        {selectedValue || Title}
      </S.SelectSelected>

      <S.SelectItems className={isActive ? '' : 'select-hide'}>
        {opsMap.map(op => (
          <div key={op.cargoId} onClick={() => handleOptionClick(op.cargoId)}>
            {op[opName]}
          </div>
        ))}
      </S.SelectItems>
    </S.SelectContainer>
  );
};

export default SelectBox;

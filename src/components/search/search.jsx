import * as S from "./style";

const Search = ({ placeholder, onChange }) => {

  return (
    <S.Container>
        <S.SearchInput
          
          type="text"
          placeholder={placeholder || "Pesquise"}
          onChange={onChange || "" }
          maxlength={40}
        ></S.SearchInput>
    </S.Container>
  );
};

export default Search;

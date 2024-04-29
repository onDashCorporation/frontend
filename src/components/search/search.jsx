import * as S from "./style";

const Search = ({ placeholder, onChange }) => {

  return (
    <S.SearchContainer>
      <S.Search/>
        <S.SearchInput
          type="text"
          placeholder={placeholder || "Pesquise"}
          onChange={onChange || "" }
          maxlength={40}
        />
    </S.SearchContainer>
  );
};

export default Search;

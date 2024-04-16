import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useState } from "react";
import Search from "../../components/search/search";
import data from "../Data/tabledb.json";
import Pagination from "../../components/pagination/pagination"
import CountItem from "../../components/countItem/countItem";


  const limit = 7;
  const total =  data.length;
const Entrada = () => {

  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffSet] = useState(0);
    const [opset, setOpset] = useState(true);
     const [selectedItems, setSelectedItems] = useState([]);





  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    
    const normalizedSearch = normalizeString(searchValue);
        const newFilteredData = data.filter((item) => {
            return Object.values(item).some((value) =>
              normalizeString(value.toString()).includes(normalizedSearch)
            );
          }
        );
        setFilteredData(newFilteredData);
      };

    const handleAddToEntrada = (item) => {
        console.log(selectedItems)
    setSelectedItems([...selectedItems, item])
    
    ;
  }
  const handleRemoveFromEntrada = (index) => {
  const updatedItems = [...selectedItems];
  updatedItems.splice(index, 1); // Remove o item com o índice fornecido
  setSelectedItems(updatedItems); // Atualiza o estado com o novo array sem o item removido
};
 

  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Section>
            <S.Title>Entrada</S.Title>
            <S.Header>
                <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() => setOpset(true) }>Entrada</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => setOpset(false)}>Adicionar</S.Op>
              </S.Option>
               {opset ? ("") 
               :
               (<S.SearchContainer>
                    <Search 
                    placeholder="Pesquisar"
                    value={searchTerm}
                    onChange={handleSearch}/>
                    </S.SearchContainer>) }
            </S.Header>
          </S.Section>
      {opset ? ( <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Foto</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader >Adicionar</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
            {selectedItems.map((item, index) => (
                    <S.TrBody key={index}>
                      {Object.entries(item).map(([key, value], index) => (
                        <S.StyledTableCell key={index}>
                          <S.Test>{value}</S.Test>
                        </S.StyledTableCell>
                      ))}
                      <S.StyledTableCell >
                     <CountItem/>  
                 </S.StyledTableCell>
                <S.StyledTableCell >
                     <S.ItemButton onClick={() => handleRemoveFromEntrada(index)}/>  
                 </S.StyledTableCell>
                    </S.TrBody>
                  ))}
              </S.TableBody>
            </S.StyledTable>
            <S.PaginationConatiner>
               <Pagination 
               limit={limit}
               total={total} 
               offset={offset}
               setOffset={setOffSet}
               />
            </S.PaginationConatiner>
          </S.TableContainer>)
          :
       ( <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Foto</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData.slice(offset,offset + limit).map((item, index) => (
              <S.TrBody key={index}>
                {Object.entries(item).map(([key, value], index) => (
                  <S.StyledTableCell key={index} >
                    <S.Test  >
                    {value}
                    </S.Test>
                    </S.StyledTableCell>
                ))}
              
                <S.StyledTableCell  onClick={() => {handleAddToEntrada(item); console.log("oi")}} >
                     <S.ButtonContainer>
                        Adicionar
                    </S.ButtonContainer>
                 </S.StyledTableCell>
              </S.TrBody>
            ))}
              </S.TableBody>
            </S.StyledTable>
            <S.PaginationConatiner>
               <Pagination 
               limit={limit}
               total={total} 
               offset={offset}
               setOffset={setOffSet}
               />
            </S.PaginationConatiner>
          </S.TableContainer>)}
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Entrada;

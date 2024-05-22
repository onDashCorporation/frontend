import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
import data from "../Data/tabledb.json";
import Pagination from "../../components/pagination/pagination"
import api from "../../services/api_login";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


  const limit = 7;
  const solicitacoes = () => {
    const nav = useNavigate();
    
    
    const [filterop, setFilterop] = useState("Filtro");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [offset, setOffSet] = useState(0)
    const [offset1, setOffSet1] = useState(0)
    const [opset, setOpset] = useState(true);
    const options = ["Status","Id", "Nome", "Departamento", "Data"]
    const total =  filteredData.length;

    const getSolicitacoes = () => {
      api
      .get('/solicitacao/', )
      .then((res) => {
        const dataTable = res.data;
        setFilteredData(dataTable);
      })
      .catch((error) => {
        setErro(true)
        console.error('Erro ao tentar acessar o estoque', error);
      });
  
    }
   
    useEffect(() => {
      getSolicitacoes()
    }, []);




  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    
    const normalizedSearch = normalizeString(searchValue);
        const newFilteredData = filteredData.filter((item) => {
          if (filterop === "Departamento") {
            return normalizeString(item.departamento.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Nome") {         
            return normalizeString(item.nome.toString()).includes(normalizedSearch);
          }
           else if (filterop === "Status") {          
            return normalizeString(item.status.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Id") {         
            return normalizeString(item.id.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Data") {
            return normalizeString(item.data.toString()).includes(normalizedSearch);
          }  else {
            return Object.values(item).some((value) =>
              normalizeString(value.toString()).includes(normalizedSearch)
            );
          }
        });
        setFilteredData(newFilteredData);
      };
 
    const location = useLocation();
    const showBackButton = location.pathname == '/solicitacoes';
  return (
    <S.Body>
       <Header showBackButton={showBackButton} />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Section>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() =>{ getSolicitacoes(); setOpset(true)} }>Abertos</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => {setOpset(false); console.log("falseee")}}>Historico</S.Op>
              </S.Option>
              <S.InsertContainer>
                <S.SearchContainer>
                  <Search 
                  placeholder="Pesquisar"
                   value={searchTerm}
                  onChange={handleSearch}/>
                </S.SearchContainer>
                <S.FilterContainer>
                  <Filter options={options} filterop={filterop} setFilterop={setFilterop} />
                </S.FilterContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
         {opset ?( <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Status</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader>Departamento</S.ThHeader>
                <S.ThHeader >Data</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                        <S.StyledTableCell >
                        <S.Test mov={item.fk_tipoMoviId === 1}>
                        {item.fk_tipoMoviId == 1 ? 'entrada' : 'saida' }
                        </S.Test>
                        </S.StyledTableCell>
                <S.StyledTableCell>{item.solicId}</S.StyledTableCell>
                <S.StyledTableCell>{item.fk_usuarioId <= 2 ? 'interno' : 'externo' }</S.StyledTableCell>
                <S.StyledTableCell>{item.data && item.data.slice(0, 10).split('-').reverse().join('-')}</S.StyledTableCell>
                <S.StyledTableCell>{item.valor_entrada}</S.StyledTableCell>
               
              
              <S.StyledTableCell  >
              <S.ButtonContainer onClick={() => nav("/pedidos")}>
              <S.More/>       
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
               offset={offset1}
               setOffset={setOffSet1}
               />
            </S.PaginationConatiner>
          </S.TableContainer>) 
          :
          (<S.TableContainer>
          <S.StyledTable>
            <S.TableHeader>
              <S.TrHeader>
              <S.ThHeader isFirst className={filterop === 'status' ? "Houver" : ""}>Status</S.ThHeader>
              <S.ThHeader>id</S.ThHeader>
              <S.ThHeader>Nome</S.ThHeader>
              <S.ThHeader>Departamento</S.ThHeader>
              <S.ThHeader >Data</S.ThHeader>       
              <S.ThHeader isLast></S.ThHeader>       
              </S.TrHeader>
            </S.TableHeader>
            <S.TableBody>
            {filteredData.slice(offset,offset + limit).map((item, index) => (
            <S.TrBody key={index}>
              {Object.entries(item).map(([key, value], index) => (
                <S.StyledTableCell key={index} >
                  <S.Test  status={key === 'status' ? value : undefined}>
                  {value}
                  </S.Test>
                  </S.StyledTableCell>
              ))}
              <S.StyledTableCell >
              <S.ButtonContainer onClick={() => nav("/pedidos")}>
              <S.More/>       
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

export default solicitacoes;

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
    const [error, setErro] = useState()
    const [opset, setOpset] = useState(true);
    const options = ["Status","Id", "Tipo", "Data","Valor" ]
    const total =  filteredData.length;

    const getSolicitacoes = () => {
      api
      .get('/solicitacao/', )
      .then((res) => {
        const dataTable = res.data.reverse();
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
    if (str === null || str === undefined) {
      return "";
    }
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  
    if (searchValue === "") {
      getSolicitacoes(); // Recarrega os dados originais
    } else {
      const normalizedSearch = normalizeString(searchValue);
      const newFilteredData = filteredData.filter((item) => {
        if (filterop === "Valor") {
          return normalizeString(item.valor_entrada).includes(normalizedSearch);
        } else if (filterop === "Nome") {
          return normalizeString(item.nome.toString()).includes(normalizedSearch);
        } else if (filterop === "Status") {
          return normalizeString(item.status).includes(normalizedSearch);
        } else if (filterop === "Id") {
          return normalizeString(item.solicId.toString()).includes(normalizedSearch);
        } else if (filterop === "Data") {
          return normalizeString(item.data.toString()).includes(normalizedSearch);
        } else{
          normalizeString(item.toString()).includes(normalizedSearch)
      }});
      setFilteredData(newFilteredData);
    }
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
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => {setOpset(false);}}>Historico</S.Op>
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
                <S.ThHeader>Tipo</S.ThHeader>
                <S.ThHeader>Data</S.ThHeader>
                <S.ThHeader >Valor</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset1, offset1 + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                        <S.StyledTableCell >
                        <S.Test status={item.status == 'Novo' ? 'novo' : 'lido'} >
                        {item.status}
                        </S.Test>
                        </S.StyledTableCell>
                <S.StyledTableCell  >{item.solicId}</S.StyledTableCell>
                <S.StyledTableCell>{item.fk_usuarioId <= 2 ? 'interno' : 'externo' }</S.StyledTableCell>
                <S.StyledTableCell>{item.data && item.data.slice(0, 10).split('-').reverse().join('/')}</S.StyledTableCell>
                <S.StyledTableCell>
                  R$ {item.valor_entrada != null ? Number(item.valor_entrada).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00'}
                </S.StyledTableCell>
               
              
              <S.StyledTableCell  >
              <S.ButtonContainer onClick={() => nav(`/pedidos/${item.solicId}`)}>
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
              <S.ThHeader isFirst >Status</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Tipo</S.ThHeader>
                <S.ThHeader>Data</S.ThHeader>
                <S.ThHeader >Valor</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
              </S.TrHeader>
            </S.TableHeader>
            <S.TableBody>
            {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                        <S.StyledTableCell >
                        <S.Test status={item.status == 'Novo' ? 'novo' : 'lido'}>
                        {item.status}
                        </S.Test>
                        </S.StyledTableCell>
                <S.StyledTableCell>{item.solicId}</S.StyledTableCell>
                <S.StyledTableCell>{item.fk_usuarioId <= 2 ? 'interno' : 'externo' }</S.StyledTableCell>
                <S.StyledTableCell>{item.data && item.data.slice(0, 10).split('-').reverse().join('/')}</S.StyledTableCell>
                <S.StyledTableCell>R$:{item.valor_entrada}</S.StyledTableCell>
               
              
              <S.StyledTableCell  >
              <S.ButtonContainer onClick={() => nav(`/pedidos/${item.solicId}/${item.status}/1`)}>
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

import * as S from "./style";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
import data from "../Data/tabledb.json";
import Pagination from "../../components/pagination/pagination"
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import { useNavigate, useParams } from "react-router-dom";
import ModalDelete from "../../components/modalDelete/modalDelete";
import DropDelete from "../../components/dropdelete/dropdelete";
import api from "../../services/api_login";

  const limit = 7;
  const solicitante = () => {
    const nav = useNavigate();

    const { fk_usuarioId} = useParams();
    const [filterop, setFilterop] = useState("Filtro");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [offset, setOffSet] = useState(0)
    const [offset1, setOffSet1] = useState(0)
    const [opset, setOpset] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const options = [ "Status","Id", "Valor", "Data"]
    const total =  filteredData.length;
    const [responsta, setResponsta] = useState();
    const [ error, setErro] = useState()
    const [selectedSolicId, setSelectedSolicId] = useState(null);
    const [isActive, setIsActive] = useState(false);



  const getSolicitacoes = () => {
    api
    .get(`/solicitacao/user/${fk_usuarioId}` )
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

  const DeleteSolicitacoes = (solicId) => {
    api
    .delete(`/solicitacao/${solicId}` )
    .then((res) => {
      setResponsta(res);
    console.log("foi", solicId)
    getSolicitacoes();
    setIsActive(!isActive)

    })
    .catch((error) => {
      setErro(true)
      console.error('Erro ao tentar deletar', error);
      console.log("não", solicId)

    });

  }

  const handleOpenModal = (solicId) => {
    console.log(solicId);
    setSelectedSolicId(solicId);
    setOpenModal(true);
  };
  


  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    
    const normalizedSearch = normalizeString(searchValue);
        const newFilteredData = filteredData.filter((item) => {
          if (filterop === "Id") {
            return normalizeString(item.solicId.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Status") {          
            return normalizeString(item.status.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Valor") {         
            return normalizeString(item.valor_entrada.toString()).includes(normalizedSearch);
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
 

  return (
    <S.Body>
      <Header />
      <S.Main>
        <S.Container>
          <S.Section>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() =>setOpset(true) }>Status</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => setOpset(false)}>Historico</S.Op>
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
                <S.ButtonContainer >
                <ButtonConfirm Title="Novo" backgroundColor="#38AD68" fontSize="15px" width="120px" onClick={() => {nav(`/novopedido/${fk_usuarioId}`)}}/>
               </S.ButtonContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
         {opset ?( <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Status</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Valor</S.ThHeader>
                <S.ThHeader >Data</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset1, offset1 + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                        <S.StyledTableCell >
                        <S.Test  status={item.status == 'Novo' ? 'novo' : 'lido'} >
                        {item.status}
                        </S.Test>
                        </S.StyledTableCell>
                <S.StyledTableCell>{item.solicId}</S.StyledTableCell>
                <S.StyledTableCell>R${item.valor_entrada}</S.StyledTableCell>
                <S.StyledTableCell>{item.data && item.data.slice(0, 10).split('-').reverse().join('/')}</S.StyledTableCell>
              <S.StyledTableCell  >
             
                  <S.ButtonContainer>
                  <DropDelete
                    Vizu={true}
                    Mix1={true}
                    onClickOP2={() => handleOpenModal(item.solicId)}
                    onClickOP3={() => nav(`/pedido/${item.solicId}`)}
                    op="Excluir"
                  />
 
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
                <S.ThHeader>Valor</S.ThHeader>
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
                        <S.Test status={item.status == 'Novo' ? 'novo' : 'lido'} >
                        {item.status}
                        </S.Test>
                        </S.StyledTableCell>
                <S.StyledTableCell>{item.solicId}</S.StyledTableCell>
                <S.StyledTableCell>R${item.valor_entrada}</S.StyledTableCell>
                <S.StyledTableCell>{item.data && item.data.slice(0, 10).split('-').reverse().join('/')}</S.StyledTableCell>               
              <S.StyledTableCell  >
             
                  <S.ButtonContainer>
                  <DropDelete Vizu={true}
                onClickOP3={() => nav(`/pedido/${item.solicId}`)}

             />  
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
        <ModalDelete
  onClick1={() => {
    setOpenModal(!openModal);
    DeleteSolicitacoes(selectedSolicId);
    
  }}
  isOpen={openModal}
  setOpenModal={() => setOpenModal(!openModal)}
  Title="Deseja Excluir?"
  Info="Após a exlusão os dados serão perdidos permanentemente "
/>

        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitante;

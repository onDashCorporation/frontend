 import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
// import data from "../Data/tabledb.json";
import Pagination from "../../components/pagination/pagination"
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../components/modalDelete/modalDelete";
import DropDelete from "../../components/dropdelete/dropdelete.jsx";
import ProductModal from "../../components/ProductModal/ProductModal";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm.jsx";
import Dropdown from "../../components/dropdown/dropdown.jsx";
import { useLocation } from 'react-router-dom';
import app from '../../services/api_login';

import { Buffer } from 'buffer';


  const limit = 7;
  const Controle = () => {
    const nav = useNavigate();
    const location = useLocation();
    const showBackButton = location.pathname == '/controle'; 
    
    const [filterop, setFilterop] = useState("Filtro");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [offset, setOffSet] = useState(0);
    const [offset1, setOffSet1] = useState(0);
    const [opset, setOpset] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const options = ["Status","Id", "Nome", "Departamento", "Data"]
    const [openProductM, setOpenProductM] = useState(false);
    const [ error, setErro] = useState(false)
    const total =  filteredData.length;
    
  const getEstoque = () => {
    app
    .get('/estoque/', )
    .then((res) => {
      const dataTable = res.data;
      setFilteredData(dataTable);
    })
    .catch((error) => {
      setErro(true)
      console.error('Erro ao tentar acessar o estoque', error);
    });

  }
  const getMovimento = () => {
    app
    .get('/solicitacao/', )
    .then((res) => {
      const dataMovimento = res.data;
      setFilteredData(dataMovimento);
    })
    .catch((error) => {
      console.error('Erro ao tentar acessar o movimento', error);
    });

  }
 
  useEffect(() => {
      getEstoque()
  }, []);
  const normalizeString = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };



  // const normalizeString = (str) => {
  //   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  // };

  const convertBufferToBase64 = (buffer) => {
    return Buffer.from(buffer).toString('base64');
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
 

  return (
    <S.Body>
      <Header showBackButton={showBackButton} />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Section>
            <S.Title>Controle</S.Title>
            <S.Header>
              <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() =>{setOpset(true), getEstoque() } }>Estoque</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => {setOpset(false), getMovimento()}}>Movimentações</S.Op>
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
                <S.ButtonContainer>
                 {opset ? ( <ButtonConfirm onClick={() => setOpenProductM(true)} Title="Adicionar" backgroundColor={'#38AD68'} fontSize={'15px'} color={'#fafafa'} width={'110px'} height={'100%'} padding={'10px'}/>) : (<Dropdown Title="Movimento" 
                OP1="Entrada" onClickOP1={() => nav("/entrada")} 
                OP2="Saida"  onClickOP2={() => nav("/saida")}/>)}
                </S.ButtonContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
          
         {opset ?( <S.TableContainer>
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
              {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      <S.TrBody key={index}>
                       
                       {error? (
                        <S.Container>
                          oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                          {console.log("oioii")}
                        </S.Container>

                       ):( 
                       <>
                       <S.StyledTableCell>
                        {item.foto && item.foto.data ? (
                        <img
                          src={`data:image/jpeg;base64,${convertBufferToBase64(item.foto.data)}`}
                          alt="Foto"
                          style={{ width: '80px', height: '80px' }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </S.StyledTableCell>
                    <S.StyledTableCell>{item.estoqueId}</S.StyledTableCell>
                    <S.StyledTableCell>{item.nome_item}</S.StyledTableCell>
                    <S.StyledTableCell>{item.qtde}</S.StyledTableCell>
                    <S.StyledTableCell>{item.nome_categoria}</S.StyledTableCell>
                       </>)}
                       
                    
                <S.StyledTableCell >
                  <S.ButtonContainer>
                  <DropDelete Mix={true} Mix1={true}
                 onClickOP1={() => setOpenModal1(true)} 
                onClickOP2={() => setOpenModal(true)}
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
              <S.ThHeader isFirst className={filterop === 'status' ? "Houver" : ""}>Tipo</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader> Data</S.ThHeader>
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
             offset={offset}
             setOffset={setOffSet}
             />
          </S.PaginationConatiner>
        </S.TableContainer>)}
        <ModalDelete isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} Title="Deseja Excluir?" Info="Após a exlusão os dados serão perdidos permanentemente " />

        <ProductModal title='Adicionar Produto' isOpen={openProductM} setOpenModal={setOpenProductM}/>

        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Controle
;

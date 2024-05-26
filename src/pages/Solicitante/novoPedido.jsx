import * as S from "./novoPedidoStyle";
import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../components/search/search";
import Pagination from "../../components/pagination/pagination"
import CountItem from "../../components/countItem/countItem";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import ModalDelete from "../../components/modalDelete/modalDelete";
import api from "../../services/api_login";
import ModalConfirm from "../../components/modalconfirm/modalconfirm";

  const limit = 7;
  
  const NovoPedido = () => {
    const nav = useNavigate();

    const { fk_usuarioId, solicId} = useParams();
      const [searchTerm, setSearchTerm] = useState("");
      const [filteredData, setFilteredData] = useState([]);
      const [offset, setOffSet] = useState(0);
      const [offset1, setOffSet1] = useState(0);
      const [opset, setOpset] = useState(true);
      const [selectedItems, setSelectedItems] = useState([]);
      const [itemValor, setItemValor] = useState();
      const [error, setError] = useState();
      const [responsta, setResponsta] = useState();
      const [openModal, setOpenModal] = useState(false);
      const [openModal1, setOpenModal1] = useState(false);
      const total =  filteredData.length;
      const [values, setValues] = useState({
        qtdSaida: '',
        fk_usuarioId: `${fk_usuarioId}`,
        fk_qtdItemId: '',
      });
      
      



      const getSolicitacoes = () => {
        api
        .get('/qtditem/caditem', )
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
            return Object.values(item).some((value) =>
              normalizeString(value.toString()).includes(normalizedSearch)
            );
          }
        );
        setFilteredData(newFilteredData);
      };
      
      
      
  const handleRemoveFromEntrada = (index) => {
  const updatedItems = [...selectedItems];
  updatedItems.splice(index, 1);
  setSelectedItems(updatedItems);
};

const calcularTotal = () => {
  if (selectedItems.length > 0) {
    const total = selectedItems.reduce((acc, item) => acc + parseFloat(item.valorItem), 0);
    return total.toFixed(2);
  }
    return 0; 
  };
  
  
  const handleQtdSaidaChange = (index, newValue) => {
    const updatedItems = [...selectedItems];
    updatedItems[index].qtdSaida = newValue;
    const id = updatedItems[index].qtdItemId;
    setSelectedItems(updatedItems);
    
    
    setValues((prevValues) => ({
      ...prevValues,
      qtdSaida: newValue,
      fk_qtdItemId: id,
    }));
  };
  
  
  
  const handleAddToEntrada = (item ) => {
    setSelectedItems([...selectedItems, item]);
  console.log("uqe porraa",item.qtdItemId);
    setValues((prevValues) => ({
        ...prevValues,
        fk_qtdItemId: item.qtdItemId, 
    }));
  };
  
 
  const PostSolicitacoes = () => {
   api.post('solicitacao/' , values)
   .then(res => {
     setResponsta(res);
     console.log("deu certo", values)
     setOpenModal(true)
   })
   .catch(error => {
     console.log("deu errado kkk",error)
     console.log("aaaaaaa",values)
     setOpenModal1(true)
   });
  }

  return (
    <S.Body>
      <Header />
      <S.Main>
        <S.Container>
          <S.Section>

            <S.Title>Novo Pedido</S.Title>
            <S.Header>
                <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() => setOpset(true) }>Entrada</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => setOpset(false)}>Adicionar</S.Op>
              </S.Option>
               {opset ? (
                <S.ButtonOp>
               <ButtonConfirm Title="Finalizar pedido"  width="150px" backgroundColor="#38AD68" fontSize="15px"  onClick={PostSolicitacoes}/>
               </S.ButtonOp>
               )
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
                <S.ThHeader isFirst>Foto</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader >Valor</S.ThHeader>       
                <S.ThHeader >Adicionar</S.ThHeader>       
                <S.ThHeader isLast>⠀⠀⠀⠀⠀⠀⠀</S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {selectedItems
                    .slice(offset1, offset1 + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                        <S.StyledTableCell  >
                          <S.ImgTable src={item.foto} />                         
                          </S.StyledTableCell>
                <S.StyledTableCell>{item.nome_item }</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_categoria}</S.StyledTableCell>
                <S.StyledTableCell>{item.qtde}</S.StyledTableCell>
                <S.StyledTableCell >R${item.valorItem}</S.StyledTableCell>
               
              
                <S.StyledTableCell >
                <CountItem onValorChange={(text) => handleQtdSaidaChange(index, text)} />
                 </S.StyledTableCell>
                <S.StyledTableCell >
                      <S.ItemContainer >
                        <S.RadiusButto onClick={() => handleRemoveFromEntrada(index)}>
                        <S.ItemButton /> 
                        </S.RadiusButto>
                     </S.ItemContainer> 
                 </S.StyledTableCell>
            </S.TrBody>
          ))}
              </S.TableBody>
            </S.StyledTable>
            <S.PaginationConatinerValor>
                <S.ContainerValor>
                    <S.Valor>
                    Valor Total: R$ {calcularTotal()}
                    </S.Valor>
                </S.ContainerValor>
            {selectedItems.length > limit && (
              <Pagination 
                limit={limit}
                total={selectedItems.length} 
                offset={offset1}
                setOffset={setOffSet1}
              />
            )}
            </S.PaginationConatinerValor>
          </S.TableContainer>)
          :
       ( <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst>foto</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader isLast>Valor</S.ThHeader>       
                <S.ThHeader isLast  ></S.ThHeader>
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                <S.StyledTableCell  >
                <S.ImgTable src={item.foto} />                         
                  </S.StyledTableCell>
                <S.StyledTableCell>{item.nome_item }</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_categoria}</S.StyledTableCell>
                <S.StyledTableCell>{item.qtde}</S.StyledTableCell>
                <S.StyledTableCell >R${item.valorItem}</S.StyledTableCell>
               
              
                <S.StyledTableCell >
                    <S.ItemContainer onClick={() => {handleAddToEntrada(item)}}>
                     <S.ButtonContainer >Adicionar</S.ButtonContainer>
                    </S.ItemContainer>
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
        <ModalConfirm isOpen={openModal} setOpenModal={() => {setOpenModal(!openModal), nav(`/solicitante/${solicId}/${fk_usuarioId}`)}} Title="A solicitação foi finaliza" Info="a sua solicitação foi finalizada com sucesso "/>
      <ModalConfirm isOpen={openModal1} setOpenModal={() => setOpenModal1(!openModal1)} Title="Solicitacão Invalida" Info="a solicitação esta incompleta, certifique de preencher todos os campos" />
      </S.Main>
    </S.Body>
  );
};

export default NovoPedido;

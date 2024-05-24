import * as S from "./novoPedidoStyle";
import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/search/search";
import Pagination from "../../components/pagination/pagination"
import CountItem from "../../components/countItem/countItem";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import ModalDelete from "../../components/modalDelete/modalDelete";
import api from "../../services/api_login";

  const limit = 7;
  
  const NovoPedido = () => {

    const {fk_usuarioId} = useParams();
      const [searchTerm, setSearchTerm] = useState("");
      const [filteredData, setFilteredData] = useState([]);
      const [offset, setOffSet] = useState(0);
      const [offset1, setOffSet1] = useState(0);
      const [opset, setOpset] = useState(true);
      const [selectedItems, setSelectedItems] = useState([]);
      const [itemValor, setItemValor] = useState();
      const [error, setError] = useState('');
      const [openModal, setOpenModal] = useState(false);
      const total =  filteredData.length;



      const getSolicitacoes = () => {
        api
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

    const handleAddToEntrada = (item) => {
      const isItemAlreadySelected = selectedItems.some(selectedItem => selectedItem.estoqueId === item.estoqueId);
      // Se o item já estiver na lista, não faz nada
      if (isItemAlreadySelected) {
        setError("Item ja selecionado");

        return;
      }
      setSelectedItems([...selectedItems, item]);
    
    ;
  }
  const handleRemoveFromEntrada = (index) => {
  const updatedItems = [...selectedItems];
  updatedItems.splice(index, 1); // Remove o item com o índice fornecido
  setSelectedItems(updatedItems); // Atualiza o estado com o novo array sem o item removido
};

const handleNovoValor = (novoValor, index) => {
  // Verifica se o novo valor não ultrapassa a quantidade disponível do item
  const novoItem = selectedItems[index];
  if (novoValor > novoItem.qtde) {
    console.log("Quantidade ultrapassa o estoque disponível");
    return;
  }

  // Atualiza a quantidade do item no estado
  const novosItens = [...selectedItems];
  novosItens[index].qtde = novoValor;
  setSelectedItems(novosItens);
};
const calcularTotal = () => {
  if (selectedItems.length > 0) {
    // Usa reduce() para somar os valores dos itens
    const total = selectedItems.reduce((acc, item) => acc + parseFloat(item.valorItem), 0);
      return total.toFixed(2);
  }
  return 0; 
};

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
               <ButtonConfirm Title="Finalizar pedido"  width="150px" backgroundColor="#38AD68" fontSize="15px"  onClick={() => setOpenModal(true)}/>
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
                <S.ThHeader isFirst>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
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
                        <S.StyledTableCell  >{item.estoqueId}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_item }</S.StyledTableCell>
                <S.StyledTableCell>{item.qtde}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_categoria}</S.StyledTableCell>
                <S.StyledTableCell >R${item.valorItem}</S.StyledTableCell>
               
              
                <S.StyledTableCell >
                     <CountItem onValorChange={handleNovoValor}  />  
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
                <S.ThHeader isFirst>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader isLast>Valor</S.ThHeader>       
                <S.ThHeader isLast  ></S.ThHeader>
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                <S.StyledTableCell  >{item.estoqueId}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_item }</S.StyledTableCell>
                <S.StyledTableCell>{item.qtde}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_categoria}</S.StyledTableCell>
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
          <ModalDelete isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} Title="Deseja Finalizar?" Info="Após confirmar a finalização o pedido sera enviado" />
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default NovoPedido;

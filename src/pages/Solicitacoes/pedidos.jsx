 import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import data from "../Data/DBpedidos.json";
import Pagination from "../../components/pagination/pagination"
import { useNavigate, useParams } from "react-router-dom";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import { useLocation } from 'react-router-dom';
import api from "../../services/api_login";

  const limit = 8;
  const Pedidos = () => {
    const nav = useNavigate();
    const {solicId} = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const [offset, setOffSet] = useState(0)
    const [error, setErro] = useState()

    const location = useLocation();
    const showBackButton = location.pathname !== '/dashboard';
    const total =  filteredData.length;

  
    const getSolicitacoes = () => {
      api
      .get(`/solicitacao/item/${solicId}` )
      .then((res) => {
        const dataTable = res.data;
        setFilteredData(dataTable);
        // console.log(dataTable)
      })
      .catch((error) => {
        setErro(true)
        console.error('Erro ao tentar acessar o pedido', error);
      });
  
    }
   
    useEffect(() => {
      getSolicitacoes();
    }, [solicId]);
  


  const handlePickUpButtonClick = () => {
    setPickedUp(true);
  };

  const handleFinishButtonClick = () => {
    setFinished(true);
  };
 

  return (
    <S.Body>
      <Header showBackButton={showBackButton} />
      <S.Main>
        <Nav />
        <S.Container>
          <S.SectionConatiner>
            <S.Title>Pedidos</S.Title>
            
            <S.ButtonContainer>
              <ButtonConfirm onClick={handleFinishButtonClick} Title="Finalizar" backgroundColor="#f22b2b" fontSize="15px"  width="120px"/>
              <ButtonConfirm onClick={handlePickUpButtonClick} Title="Confirmar" backgroundColor="#38AD68" fontSize="15px" width="120px"/>
               </S.ButtonContainer>
          </S.SectionConatiner>
          
         <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Foto</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader>Quantidade</S.ThHeader>
                <S.ThHeader isLast>Categoria</S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                        <S.StyledTableCell >
                        <S.Test >
                        {item.status}
                        </S.Test>
                        </S.StyledTableCell>
                <S.StyledTableCell>{item.cadItemId}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_item}</S.StyledTableCell>
                <S.StyledTableCell>{item.qtdEntrada}</S.StyledTableCell>
                <S.StyledTableCell>R$:{item.nome_categoria}</S.StyledTableCell>
      
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
          </S.TableContainer>     
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Pedidos;

import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import data from "../Data/DBpedidos.json";
import Pagination from "../../components/pagination/pagination"
import { useNavigate,useParams } from "react-router-dom";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import HorizontalLinearStepper from "../../components/Steps/stepper.jsx";
import api from "../../services/api_login.js";

  
const limit = 8;
const Pedido = () => {
  const nav = useNavigate();
  const {solicId} = useParams();
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffSet] = useState(0)
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

 
 

  return (
    <S.Body>
      <Header />
      <S.Main>
        <S.Container>
          <S.SectionConatiner>
            <S.Title>Pedido</S.Title>
          </S.SectionConatiner>
          
         <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader>Quantidade</S.ThHeader>
                <S.ThHeader isLast>Valor</S.ThHeader>     
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData
                    .slice(offset, offset + limit)
                    .map((item, index) => (
                      
                      <S.TrBody key={index}>
                <S.StyledTableCell>{item.cadItemId}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_item}</S.StyledTableCell>
                <S.StyledTableCell>{item.nome_categoria}</S.StyledTableCell>
                <S.StyledTableCell>{item.qtdEntrada}</S.StyledTableCell>
                        <S.StyledTableCell >R$ 
                        {item.valor_entrada}
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

            {/* Passos */}
            {/* <HorizontalLinearStepper /> */}
          </S.TableContainer>     


        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Pedido;

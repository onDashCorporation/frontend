 import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import data from "../Data/DBpedidos.json";
import Pagination from "../../components/pagination/pagination"
import { useNavigate } from "react-router-dom";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

  const limit = 8;
  const Pedidos = () => {
    const nav = useNavigate();
    const location = useLocation();
    const showBackButton = location.pathname !== '/dashboard';
    const { solicId } = useParams();
    const total =  data.length;

  

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffSet] = useState(0)

  //Status do pedido
  const [pickedUp, setPickedUp] = useState(false);
  const [read, setRead] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setRead(true);
  }, []);

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
              {/* {read && <p>Pedido lido.</p>}
              {pickedUp && <p>Pedido Retirado.</p>}
              {finished && <p>Pedido finalizado.</p>} */}
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
                <S.ThHeader >Categoria</S.ThHeader>       
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
                <S.StyledTableCell>{item.solicId}</S.StyledTableCell>
                <S.StyledTableCell>{item.fk_usuarioId <= 2 ? 'interno' : 'externo' }</S.StyledTableCell>
                <S.StyledTableCell>{item.data && item.data.slice(0, 10).split('-').reverse().join('-')}</S.StyledTableCell>
                <S.StyledTableCell>R$:{item.valor_entrada}</S.StyledTableCell>
               
              
              <S.StyledTableCell  >
              <S.ButtonContainer onClick={() => nav("/pedidos/${item.solicId}")}>
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
          </S.TableContainer>     
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Pedidos;

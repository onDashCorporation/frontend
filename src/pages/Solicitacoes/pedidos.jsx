import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import data from "../Data/DBpedidos.json";
import Pagination from "../../components/pagination/pagination";
import { useNavigate, useParams } from "react-router-dom";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import { useLocation } from "react-router-dom";
import api from "../../services/api_login";
import ModalConfirm from "../../components/modalconfirm/modalconfirm";

const limit = 8;
const Pedidos = () => {
  const nav = useNavigate();
  const { solicId, status, id } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [error, setErro] = useState();
  const [responsta, setResponsta] = useState();
  const [newstatus, setNewStatus] = useState();
  const [newstatus1, setNewStatus1] = useState({ status: "Autorizado" });
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  const location = useLocation();
  const showBackButton = location.pathname !== "/dashboard";
  const total = filteredData.length;

  useEffect(() => {
    getSolicitacoes();
  }, []);

  const getSolicitacoes = () => {
    api
      .get(`/solicitacao/${solicId}`)
      .then((res) => {
        const dataTable = res.data.itens;
        const status =  res.data.status;
        setFilteredData(dataTable);
        setNewStatus(status);
       
      })
      .catch((error) => {
        setErro(true);
        console.error("Erro ao tentar acessar o pedido", error);
      });
  };

  const postStatus = () => {
    api
      .put(`/solicitacao/status/${solicId}`, newstatus)
      .then((res) => {
        setResponsta(res);
        setOpenModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const postFinalizar = () => {
    api
      .put(`/solicitacao/status/${solicId}`, newstatus1)
      .then((res) => {
        setResponsta(res);
        setOpenModal1(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

            {0 === 0 && (
              <S.ButtonContainer>
                <ButtonConfirm
                  onClick={postFinalizar}
                  Title="Finalizar"
                  backgroundColor="#f22b2b"
                  fontSize="15px"
                  width="120px"
                />
                {newstatus == "Novo" && (
                  <ButtonConfirm
                    onClick={postStatus}
                    Title="Confirmar"
                    backgroundColor="#38AD68"
                    fontSize="15px"
                    width="120px"
                  />
                )}
              </S.ButtonContainer>
            )}
          </S.SectionConatiner>

          <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                  <S.ThHeader isFirst>id</S.ThHeader>
                  <S.ThHeader>Nome</S.ThHeader>
                  <S.ThHeader>Categoria</S.ThHeader>
                  <S.ThHeader>Quantidade</S.ThHeader>
                  <S.ThHeader isLast>Valor</S.ThHeader>
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
                {filteredData
                  .slice(offset, offset + limit)
                  .map((item, index) => (
                    <S.TrBody key={index}>
                      <S.StyledTableCell>{item.fk_cadItemId}</S.StyledTableCell>
                      <S.StyledTableCell>{item.nome_item}</S.StyledTableCell>
                      <S.StyledTableCell>{item.qtde}</S.StyledTableCell>
                      <S.StyledTableCell>{item.qtdEntrada}</S.StyledTableCell>
                      <S.StyledTableCell>
                        R$
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
          </S.TableContainer>
        </S.Container>
      </S.Main>
      <ModalConfirm
        isOpen={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
        Title="Confrimação Efetuda"
        Info="a solicitação teve seu status alterado para lido"
      />
      <ModalConfirm
        isOpen={openModal1}
        setOpenModal={() => {
          setOpenModal1(!openModal1), nav("/solicitacoes");
        }}
        Title="Solicitação Finalizada"
        Info="a solicitação teve seu status alterado para autorizado"
      />
    </S.Body>
  );
};

export default Pedidos;

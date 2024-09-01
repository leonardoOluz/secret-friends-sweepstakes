import styled from "styled-components";
import {
  styleBotaoMobile,
  styleComponenteMobile,
} from "../../styles/GlobalStyle";

export const FormSorteio = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${(props) => props.theme.colors.cinzaEscuro};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
  }
`;

export const SelecaoNome = styled.select`
  margin-bottom: 2em;
  width: 476px;
  height: 75px;
  border-radius: 32px;
  box-sizing: border-box;
  box-shadow: 4px 4px ${(props) => props.theme.colors.preto};
  border: 2px solid ${(props) => props.theme.colors.preto};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding-left: 30px;
  outline: none;

  @media screen and (max-width: 800px) {
    ${styleComponenteMobile}
  }
`;

export const ContainerSorteador = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 150px;
    align-self: center;
  }

  @media screen and (max-width: 800px) {
    img {
      width: 125px;
    }
  }
`;

export const BtnSortear = styled.button`
  width: 227px;
  height: 80px;
  padding-left: 15px;
  background-color: ${(props) => props.theme.colors.laranja};
  background-image: url("./image/casino.png");
  background-repeat: no-repeat;
  background-position: 31px center;
  box-shadow: 2px 2px ${(props) => props.theme.colors.preto};
  border: 2px solid ${(props) => props.theme.colors.preto};
  color: ${(props) => props.theme.colors.branco};
  border-radius: 38px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    ${styleBotaoMobile}
    font-size: 16px;
    background-position: 15px center;
    background-size: 24px;
  }
`;

export const ListaNomes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    color: ${(props) => props.theme.colors.laranja};
    line-height: 30px;
    font-size: 25px;
  }
`;

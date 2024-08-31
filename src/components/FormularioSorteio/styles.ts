import styled from "styled-components";

export const FormSorteio = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
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
  border-radius: 45px;
  box-sizing: border-box;
  box-shadow: 5px 5px  ${(props) => props.theme.colors.preto};
  border: 3px solid ${(props) => props.theme.colors.preto};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding-left: 30px;
  outline: none;
`;
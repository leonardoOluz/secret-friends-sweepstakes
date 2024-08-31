import styled from "styled-components";

export const SecaoDoFormulario = styled.section`
  margin-top: -31px;
  padding-top: 32px;
  background-color: ${(props) => props.theme.colors.creme};
  border-top-right-radius: 64px;
  border-top-left-radius: 64px;
  border: 2px solid ${(props) => props.theme.colors.preto};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    padding: 35px 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    color: ${(props) => props.theme.colors.azul};
  }

  @media screen and (max-width: 800px) {
    margin-top: -24px;
    
    h2 {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

import styled from "styled-components";

const CabecalhoComponente = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding-top: 123px;

  div {
    background-image: url("./image/logo.png");
    width: 351px;
    height: 117px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-top: 55px;
    div {
      background-image: url("./image/logo-pequeno.png");
      width: 235px;
      height: 199px;
    }

    img {
      width: 340px;
    }
  }
`;

export default CabecalhoComponente;

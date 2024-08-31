import styled from "styled-components";

export const FormAdicionarNomes = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    margin-top: 1rem;
  }
`;

export const ContainerForm = styled.div`
  width: 726px;
  display: flex;
  border-radius: 45px;
  box-shadow: 5px 5px 10px ${(props) => props.theme.colors.preto};

  input {
    padding-left: 60px;
    height: 82px;
    width: 70%;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.theme.colors.preto};
  }

  input::placeholder {
    padding-left: 60px;
    font-size: 1rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.primary};
    line-height: 2rem;
    background-image: url("./image/person_add.png");
    background-repeat: no-repeat;
    background-position: 5px center;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 30%;
    font-size: 16px;
    font-weight: 400;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    border: 2px solid ${(props) => props.theme.colors.preto};
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.cinza};
  }

  button:disabled {
    cursor: no-drop;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    box-shadow: none;

    input {
      width: 95%;
      max-width: 328px;
      height: 48px;
      padding-left: 20px;
      min-width: 328px;
      border-radius: 45px;
      box-sizing: border-box;
      box-shadow: 3px 3px 10px ${(props) => props.theme.colors.preto};
      border: 1px solid ${(props) => props.theme.colors.preto};
    }

    input::placeholder {
      padding-left: 40px;
      background-position: left;
      font-size: 14px;
    }

    button {
      width: 155px;
      margin-top: 16px;
      height: 48px;
      border: 1px solid ${(props) => props.theme.colors.preto};
      border-radius: 45px;
      box-shadow: 3px 3px 10px ${(props) => props.theme.colors.preto};
    }
  }
`;

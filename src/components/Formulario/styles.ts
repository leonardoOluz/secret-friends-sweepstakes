import styled from "styled-components";
import {
  styleBotaoMobile,
  styleComponenteMobile,
} from "../../styles/GlobalStyle";

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
  border-radius: 38px;
  box-shadow: 5px 5px 10px ${(props) => props.theme.colors.preto};

  input {
    padding-left: 60px;
    height: 82px;
    width: 70%;
    border-top-left-radius: 38px;
    border-bottom-left-radius: 38px;
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
    border-top-right-radius: 38px;
    border-bottom-right-radius: 38px;
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
      ${styleComponenteMobile}
      padding-left: 20px;
      border-radius: 45px;
      box-sizing: border-box;
    }

    input::placeholder {
      padding-left: 40px;
      background-position: left;
      font-size: 14px;
    }

    button {
      ${styleBotaoMobile}
    }
  }
`;

export const ListaNomes = styled.li`
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  padding-top: 6px;
  text-align: center;
`;

export const ContainerDoPlay = styled.div`
  display: flex;
  padding-bottom: 32px;
  gap: 133px;

  button {
    align-self: center;
    width: 351px;
    height: 80px;
    padding-left: 30px;
    background-color: ${(props) => props.theme.colors.laranja};
    border-radius: 45px;
    background-image: url("./image/play_circle_outline.png");
    background-repeat: no-repeat;
    background-position: 35px center;
    color: ${(props) => props.theme.colors.branco};
    box-shadow: 5px 5px 10px ${(props) => props.theme.colors.preto};
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    font-family: Poppins, sans-serif;
    cursor: pointer;
  }

  button:disabled {
    cursor: no-drop;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.azul};
  }

  @media screen and (max-width: 800px) {
    padding-top: 2em;
    flex-direction: column;
    gap: 32px;

    button {
      width: 155px;
      height: 64px;
      font-size: 16px;
      background-image: none;
      text-align: center;
      padding-left: 0;
      line-height: 24px;
    }

    img {
      width: 127px;
      padding-left: 17px;
    }
  }
`;

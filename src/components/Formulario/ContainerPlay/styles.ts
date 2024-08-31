import styled from "styled-components";

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
    background-color: ${props => props.theme.colors.azul};
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

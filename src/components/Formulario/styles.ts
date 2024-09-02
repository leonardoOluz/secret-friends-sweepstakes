import styled from 'styled-components';
import {
	styleBotaoMobile,
	styleComponenteMobile,
} from '../../styles/GlobalStyle';

export const FormAdicionarNomes = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		background-color: ${(props) => props.theme.colors.bgColor};
		border: 1px solid ${(props) => props.theme.colors.bdColor};
		color: ${(props) => props.theme.colors.colorAlert};
		padding: 0.8rem 0.5rem;
		font-size: 1.2rem;
		margin-top: 10px;
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
		font-size: 1rem;
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
		background-image: url('./image/person_add.png');
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

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaParticipantes, mensagemErro } from '../atom';

const useAdicionarParticipantes = () => {
	const setParticipantes = useSetRecoilState(listaParticipantes);
	const setrMessageErro = useSetRecoilState(mensagemErro);
	const participantes = useRecoilValue(listaParticipantes);
	const timeMensageErro = () => setTimeout(() => setrMessageErro(''), 3000);

	return (nome: string) => {
		if (nome.length < 3) {
			setrMessageErro('O nome precisa conter mais de 3 caractéres!');
			return timeMensageErro();
		}

		if (participantes.includes(nome)) {
			setrMessageErro('Esse nome já foi adicionado!');
			return timeMensageErro();
		}

		return setParticipantes((listaAntiga) => [...listaAntiga, nome]);
	};
};

export default useAdicionarParticipantes;

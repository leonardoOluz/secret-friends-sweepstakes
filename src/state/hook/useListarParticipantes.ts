import { useRecoilValue } from 'recoil';
import { listaParticipantes } from '../atom';

const useListarParticipantes = () => {
	return useRecoilValue(listaParticipantes);
};

export default useListarParticipantes;

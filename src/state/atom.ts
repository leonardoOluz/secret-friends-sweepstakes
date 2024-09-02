import { atom } from 'recoil';

export const listaParticipantes = atom<string[]>({
	key: 'listaParticipantes',
	default: [],
});

export const mensagemErro = atom<string>({
	key: 'mensagemErro',
	default: '',
});

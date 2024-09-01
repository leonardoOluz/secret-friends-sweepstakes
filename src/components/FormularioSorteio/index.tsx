import { BtnSortear, ContainerSorteador, FormSorteio, ListaNomes, SelecaoNome } from "./styles";

const FormularioSorteio = () => {
    return (
        <FormSorteio>
            <SelecaoNome>
                <option value={'teste'} id="teste">Selecione seu nome</option>
                <option value={'teste'} id="teste">Teste</option>
            </SelecaoNome>
            <h2>Clique em em sortear para ver quem é seu amigo secreto!</h2>
            <ContainerSorteador>
                <BtnSortear>Sortear!</BtnSortear>
                <ListaNomes>
                    <li>Leo</li>
                    <li>Ana</li>
                </ListaNomes>
                <img src="./image/aviao.png" alt="aviao de sorteio" />
            </ContainerSorteador>
        </FormSorteio>
    )
};

export default FormularioSorteio;
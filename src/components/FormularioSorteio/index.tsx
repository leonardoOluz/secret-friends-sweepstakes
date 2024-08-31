import { FormSorteio, SelecaoNome } from "./styles";

const FormularioSorteio = () => {
    return (
        <FormSorteio>
            <SelecaoNome>
                <option value={'teste'} id="teste">Selecione seu nome</option>
                <option value={'teste'} id="teste">Teste</option>
            </SelecaoNome>
            <h2>Clique em em sortear para ver quem é seu amigo secreto!</h2>
        </FormSorteio>
    )
};

export default FormularioSorteio;
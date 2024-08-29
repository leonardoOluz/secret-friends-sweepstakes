import { ContainerDoPlay, FormAdicionarNomes, SecaoDoFormulario } from "./styles";

const Formulario = () => {
    return (<SecaoDoFormulario>
        <h2>Vamos começar!</h2>
        <FormAdicionarNomes>
            <div>
                <input type="text" placeholder="Insira os nomes dos participantes" />
                <button disabled={true}>Adicionar</button>
            </div>
        </FormAdicionarNomes>
        <ul>
            <li>Leo</li>
        </ul>
        <ContainerDoPlay>
            <button disabled={false}>Iniciar brincadeira!</button>
            <img src="./image/sacolas.png" />
        </ContainerDoPlay>
    </SecaoDoFormulario>)
};

export default Formulario;
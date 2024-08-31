import ContainerPlay from "./ContainerPlay";
import ListaAdicionada from "./ListaAdicionada";
import { ContainerForm, FormAdicionarNomes } from "./styles";

const Formulario = () => {
  return (
    <FormAdicionarNomes>
      <ContainerForm>
        <input type="text" placeholder="Insira os nomes dos participantes" />
        <button disabled={true}>Adicionar</button>
      </ContainerForm>
      <ul>
        <ListaAdicionada nome="Leo"/>
        <ListaAdicionada nome="Ana"/>
        <ListaAdicionada nome="Lucca"/>
      </ul>
      <ContainerPlay/>
    </FormAdicionarNomes>
  )
};

export default Formulario;
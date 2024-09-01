import { ContainerDoPlay, ContainerForm, FormAdicionarNomes, ListaNomes } from "./styles";

const Formulario = () => {
  return (
    <FormAdicionarNomes onClick={() => { }}>
      <ContainerForm>
        <input type="text" placeholder="Insira os nomes dos participantes" />
        <button disabled={true}>Adicionar</button>
      </ContainerForm>
      <ul>
        <ListaNomes>Leo</ListaNomes>
        <ListaNomes>Ana</ListaNomes>
        <ListaNomes>Lucca</ListaNomes>
      </ul>
      <ContainerDoPlay>
        <button type="submit" disabled={true}>Iniciar brincadeira!</button>
        <img src="./image/sacolas.png" alt="sacola de presente" />
      </ContainerDoPlay>
    </FormAdicionarNomes>
  )
};

export default Formulario;
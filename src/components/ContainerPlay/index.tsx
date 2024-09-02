import useListarParticipantes from "../../state/hook/useListarParticipantes"
import { ContainerDoPlay } from "./styles"

const ContainerSortear = () => {
  const listaParticipante = useListarParticipantes();

  return (
    <ContainerDoPlay>
      <button
        type="submit"
        disabled={listaParticipante.length < 3}
      >Iniciar brincadeira!</button>
      <img src="./image/sacolas.png" alt="sacola de presente" />
    </ContainerDoPlay>
  )
}

export default ContainerSortear
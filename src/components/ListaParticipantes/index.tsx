import useListarParticipantes from "../../state/hook/useListarParticipantes"
import { ListaNomes, ListaParticipante } from "./styles"

const ListaParticipantes = () => {
  const participantes = useListarParticipantes();
  return (
    <ListaParticipante>
      {participantes.map((nome, index) => <ListaNomes key={index} >{nome}</ListaNomes>)}
    </ListaParticipante>
  )
}

export default ListaParticipantes

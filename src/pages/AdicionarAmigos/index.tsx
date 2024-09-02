import ContainerSortear from "../../components/ContainerPlay";
import Formulario from "../../components/Formulario";
import ListaParticipantes from "../../components/ListaParticipantes";
import SecaoPrincipal from "../../components/SecaoPrincipal";


const AdicionarAmigos = () => {
  return (
    <SecaoPrincipal>
      <h2>Vamos começar!</h2>
      <Formulario />
      <ListaParticipantes/>
      <ContainerSortear/>
    </SecaoPrincipal>
  )
}

export default AdicionarAmigos
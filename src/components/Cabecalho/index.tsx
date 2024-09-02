import CabecalhoComponente from "./styles"

const Cabecalho = () => {
    return (
        <CabecalhoComponente>
            <div role="img" aria-label="Logo do Sorteador"></div>
            <img src="./image/participante.png" alt="Participantes com um presente na mão"/>
        </CabecalhoComponente>
    )
}

export default Cabecalho;
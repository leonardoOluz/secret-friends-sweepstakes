import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import thema from "./styles/themes/themes"
import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario"

function App() {
  return (
    <ThemeProvider theme={thema}>
      <GlobalStyle />
      <Cabecalho/>
      <Formulario/>
    </ThemeProvider>
  )
}


export default App

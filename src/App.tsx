import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import thema from "./styles/themes/themes"
import AdicionarAmigos from "./pages/AdicionarAmigos"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginBase from "./components/PaginaBase"
import Sorteio from "./pages/Sorteio"


function App() {
  return (
    <ThemeProvider theme={thema}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginBase />}>
            <Route index element={<AdicionarAmigos />} />
            <Route path="sorteio" element={<Sorteio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App

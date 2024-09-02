import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import thema from "./styles/themes/themes"
import AdicionarAmigos from "./pages/AdicionarAmigos"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginBase from "./components/PaginaBase"
import Sorteio from "./pages/Sorteio"
import { RecoilRoot } from "recoil"


function App() {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  )
}


export default App

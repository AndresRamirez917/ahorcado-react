
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PagInicio from './paginas/PagInicio'
import Victoria from './paginas/Victoria'
import Juego from './paginas/Juego'
import Derrota from './paginas/Derrota'
import Provider from './contexto/Provider'

function App() {
  return (
    <Provider>
  <Routes>
    <Route path ="/" element={<PagInicio/>}></Route>
    <Route path ="juego/" element={<Juego/>}></Route>
    <Route path ="victoria/" element={<Victoria/>}></Route>
    <Route path ="derrota/" element={<Derrota/>}></Route>
  </Routes>
  </Provider>
  )
}

export default App

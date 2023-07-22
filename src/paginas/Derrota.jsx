import React from 'react'
import { useNavigate } from 'react-router-dom'

const Derrota = () => {
  const navegacion = useNavigate()
  return (
    <>
    <h1>Derrota</h1>
    <button className="boton" onClick={()=>navegacion("juego/")}>Jugar</button>
    </>
  )
}

export default Derrota
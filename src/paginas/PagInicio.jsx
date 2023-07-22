import React from 'react'
import { useNavigate } from 'react-router-dom'

const PagInicio = () => {
  const navegacion = useNavigate()
  return (
    <>
    <h1>Bienvenido/a</h1>
    <button className="boton" onClick={()=>navegacion("juego/")}>Jugar</button>
    </>
  )
}

export default PagInicio
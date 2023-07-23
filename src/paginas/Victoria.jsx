import React from 'react'
import { useNavigate } from 'react-router-dom'

const Victoria = () => {
  const navegacion = useNavigate()
  return (
    <>
    <h1>Victoria</h1>
    <button className="boton" onClick={()=>navegacion("/juego/")}>Jugar de nuevo</button>
    </>
  )
}

export default Victoria
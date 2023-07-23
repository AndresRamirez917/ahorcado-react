import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto'
import imagen6 from "../assets/el_ahorcado6.png"

const Derrota = () => {
  const {palabraAdivinar} = useContext(Contexto)
  const navegacion = useNavigate()
  return (
    <>
    <div className='imagenDerrota'>
    <h1>Derrota</h1>
    <h1>La palabra correcta era {palabraAdivinar}</h1> 
    <img src={imagen6} alt="" />
    <button className="boton" onClick={()=>navegacion("/juego/")}>Inténtalo de nuevo</button>
    </div>
    </>
  )
}

export default Derrota
import Contexto from "./Contexto"
import React from 'react'
import { useState } from "react"

const Provider = ( {children} ) => {
  const [palabraAdivinar, setPalabraAdivinar] = useState("")
  const guardaPalabra = (palabra="") =>{
    setPalabraAdivinar(palabra)
  }
  return (
    <Contexto.Provider value={{
      guardaPalabra,
      palabraAdivinar,
      //setPalabraAdivinar
    }}>

      {children}
      </Contexto.Provider>
  )
}

export default Provider
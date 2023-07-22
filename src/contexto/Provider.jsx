import Contexto from "./Contexto"
import React from 'react'

const Provider = ( {children} ) => {
  return (
    <Contexto.Provider value={{
    }}>

      {children}
      </Contexto.Provider>
  )
}

export default Provider
import React, { useEffect, useState } from 'react'
import { PALABROS } from "../assets/array"
const Juego = () => {
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const misColores = [{backgroundColor:"white"}, {backgroundColor:"green"}, {backgroundColor:"red"}]
  const letrasToArray = letras.split("")
  const [numAzar, setNumAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);
  const [letraCorrecta, setLetraCorrecta] = useState([]);
  const [letraIncorrecta, setLetraIncorrecta] = useState([]);

  const pulsado = (e) => {
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras, (letra)])
    if(palabra.indexOf(letra)>0){
      setLetraCorrecta([...letraCorrecta, (letra)])
    }else{
      setLetraIncorrecta([...letraIncorrecta, (letra)])
    }
  }

  useEffect(()=>{
    setNumAzar(Math.floor(Math.random()*PALABROS.length))
  },[])
  useEffect(()=>{
    setPalabra(PALABROS[numAzar].palabro.split(""))
  },[numAzar])//se ejecuta únicamente cuando cambia nunAzar
  
  return (
    <>
    <div className='pregunta'>
     {PALABROS[numAzar].pregunta}
    </div>
    <div className='palabra'>
    {
      palabra.map((letra, i)=>(
        misLetras.indexOf(letra)===-1
        ?
        <div className='guion' key={i}></div>
        :
        <div className='guion' key={i}>{letra.toUpperCase()}</div>
      ))
    }
     </div>

     <div className='botonLetra'>
      {
        letrasToArray.map((letra)=>(
         (letraCorrecta.find(e=>e===letra))
          ?
          <button style={misColores[1]} key={letra}>{letra}</button>
          :
          (letraIncorrecta.find(e=>e===letra))
          ?
          <button style={misColores[2]}  key={letra}>{letra}</button>
          :
          <button style={misColores[0]} onClick={pulsado} key={letra}>{letra}</button>
        ))
      }
     </div>
     <div className='imagen'>
     
     </div>
    </>
  )
}

export default Juego
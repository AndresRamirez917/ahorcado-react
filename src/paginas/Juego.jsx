import React, { useContext, useEffect, useState } from "react";
import { PALABROS } from "../assets/array";
import { useNavigate } from "react-router-dom";
import image from "../assets/el_ahorcado1.png"
import image2 from "../assets/el_ahorcado2.png"
import image3 from "../assets/el_ahorcado3.png"
import image4 from "../assets/el_ahorcado4.png"
import image5 from "../assets/el_ahorcado5.png"
import image6 from "../assets/el_ahorcado6.png"
import Contexto from "../contexto/Contexto";

const Juego = () => {
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const misColores = [
    { backgroundColor: "white" },
    { backgroundColor: "green" },
    { backgroundColor: "red" },
  ];
  
  const {guardaPalabra} = useContext(Contexto)
  const navegacion = useNavigate();
  const letrasToArray = letras.split("");
  const [numAzar, setNumAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);
  const [letraCorrecta, setLetraCorrecta] = useState([]);
  const [letraIncorrecta, setLetraIncorrecta] = useState([]);
  const [imagen, setImagen] = useState(1);
  const [contador, setContador] = useState(0)

  const pulsado = (e) => {
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras, letra]);
    if (palabra.indexOf(letra) >= 0) {
      setLetraCorrecta([...letraCorrecta, letra]);
    } else {
      setLetraIncorrecta([...letraIncorrecta, letra]);
      setImagen(imagen + 1);
      setContador(contador+1)
      console.log(contador)
      if (contador>=6) {
        navegacion("/derrota");
      }
    }
  };


  useEffect(() => {
    let noEncontrado = 0;
    palabra.map((p) => {
      if (misLetras.find((e) => e === p) === undefined) {
        noEncontrado++;
      }
    });
    if (noEncontrado === 0 && letraCorrecta.length > 0) {
      navegacion("/victoria");
    }
  }, [letraCorrecta]); //se ejecuta únicamente cuando cambia letraCorrecta

  useEffect(() => {
    setNumAzar(Math.floor(Math.random() * PALABROS.length));
  }, []);

  useEffect(() => {
    setPalabra(PALABROS[numAzar].palabro.split(""));
    guardaPalabra(PALABROS[numAzar].palabro)
  }, [numAzar]); //se ejecuta únicamente cuando cambia nunAzar

  return (
    <>
      <div className="pregunta">{PALABROS[numAzar].pregunta}</div>
      <div className="palabra">
        {palabra.map((letra, i) =>
          misLetras.indexOf(letra) === -1 ? (
            <div className="guion" key={i}></div>
          ) : (
            <div className="guion" key={i}>
              {letra.toUpperCase()}
            </div>
          )
        )}
      </div>

      <div className="botonLetra">
        {letrasToArray.map((letra) =>
          letraCorrecta.find((e) => e === letra) ? (
            <button style={misColores[1]} key={letra}>
              {letra}
            </button>
          ) : letraIncorrecta.find((e) => e === letra) ? (
            <button style={misColores[2]} key={letra}>
              {letra}
            </button>
          ) : (
            <button style={misColores[0]} onClick={pulsado} key={letra}>
              {letra}
            </button>
          )
        )}
      </div>

      <div className="imagen">
    {
     contador==1?
      <img className="imagen" src={image} alt="" />
     :contador==2?
      <img className="imagen" src={image2} alt="" />
     :contador==3?
      <img className="imagen" src={image3} alt="" />
     :contador==4?
      <img className="imagen" src={image4} alt="" />
     :contador==5?
      <img className="imagen" src={image5} alt="" />
     :contador==6?
      <img className="imagen" src={image6} alt="" />
     :console.log("")
    }
        {/* <img src={import(`../assets/el_ahorcado${imagen}.png`)} alt="" /> */}
      </div>
    </>
  );
};

export default Juego;

import React from  "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Container } from "./styles";
import ForcaImagem from "../../assets/forca.png"
const Main: React.FC = () => {

  const alphabet :  string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));


  return (
    <Container>
      <div className={"forca"}>
        <img
          className={"imgBase"}
          src={ForcaImagem}/>
      </div>
      <div className={"word"}>
        <p>T</p>
        <p>E</p>
        <p>S</p>
        <p>T</p>
        <p>E</p>
      </div>
      <div className={"keyboard"}>
        {alphabet.map((letter)=>(
          <div className={"letter"}>{letter}</div>
        ))}
        <span className={"iconPlay"}><IoGameControllerOutline /></span>
      </div>
    </Container>
  )
};

export  default Main;
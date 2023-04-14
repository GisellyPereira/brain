import React from "react";
import "./Welcome.css";
import Img from "../img/mulher.png";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizstate, dispatch] = useContext(QuizContext);
  

  return (
    <div className="welcome-tudo">
      <div className="Welcome-container">
        <div className="Welcome-Titles">
          <h1>Seja bem-vindo</h1>
          <h3>Teste agora seus conhecimentos</h3>
        </div>

        <img className="img-mulher" src={Img} alt="imagem" />
      </div>
      <h3 className="h3-button">Clique no botão abaixo para começar</h3>
      <button className="welcome-button" onClick={()=> dispatch({type: "CHANGE_STATE"})}>Start</button>
    </div>
  );
};

export default Welcome;

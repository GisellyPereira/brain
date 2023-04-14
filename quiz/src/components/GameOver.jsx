import { useContext } from "react"
import { QuizContext } from "../context/quiz.jsx"
import "./GameOver.css"
import React from 'react'
import check from "../img/checked.png"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const score = quizState.score;
  return (
    <div className="gO-tudo">
         <div className="gameOver">
    <div className="gameOver-container">
        <img src={check} alt="check" />
        <h1>Fim de jogo!</h1>
        <h3>Pontuação: {score}</h3>
        <h4>Você acertou {score} de {quizState.questions.length} perguntas</h4>
        <button onClick={()=> dispatch({type:"NEW_GAME"})}>Recomeçar</button>
    </div>

    </div>
    </div>
   
  )
}

export default GameOver

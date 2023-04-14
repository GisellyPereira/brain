import React, { useEffect,useContext} from 'react'
import { QuizContext } from './context/quiz.jsx'
import './App.css'
import Welcome from './components/Welcome.jsx'
import Question from './components/Question.jsx'
import GameOver from './components/GameOver.jsx'


const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type: 'REORDER_QUESTIONS'});
  },[])


  return (
    <div className='App'>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playning' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}

export default App


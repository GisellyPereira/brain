import React from "react";
import "./Question.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz.jsx";
import Options from "./Options.jsx.js";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({ 
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option},
     });
  };

  return (
    <div className="question-div">
      <div>
        <p className="qnt-perg">
          Pergunta {quizState.currentQuestion + 1} de{" "}
          {quizState.questions.length}
        </p>
        <h2 className="h2-quest">{currentQuestion.question}</h2>
        <div className="options-container">
          {currentQuestion.options.map((option) => (
            <Options
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
            />
          ))}
        </div>
        {quizState.answerSelected && (
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;

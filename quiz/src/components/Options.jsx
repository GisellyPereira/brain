import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz.jsx";
import "./Options.css";

const Options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`divOption ${
        quizState.answerSelected && option === answer ? "correct" : ""
      }  ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;

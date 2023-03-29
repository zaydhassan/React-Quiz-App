import React, { useState } from "react";
import { Link } from "react-router-dom";
import quizQuestions from "./quizQuestions";
import Timer from "./Timer";
import Score from "./Score";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer(null);
  };

  const handleAnswerSelect = (event) => {
    const selectedAnswer = event.target.value;
    setUserAnswer(selectedAnswer);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const isAnswerSelected = userAnswer !== null;
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const handleSubmitClick = () => {
    alert("You have submitted your quiz and your score has been graded. " +
    "Scroll down to see your Score!")
    setIsTrue(true);
  };

  const handleTimeUp = () => {
    setIsTimeUp(true);
  };

  return (
    <div className="quiz">
      <div className="quiz-inner">
        <div className="container-fluid header">
          <h3 className="header-text">General Knowledge</h3>
        </div>
        <Timer onTimeUp={handleTimeUp} />
        <br />
        <div className="quiz-body">
          <h2>
            {currentQuestionIndex + 1}.{currentQuestion.question}
          </h2>
          {currentQuestion.answers.map((answer) => (
            <div key={answer}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={userAnswer === answer}
                  onChange={handleAnswerSelect}
                  disabled={isAnswerSelected || isTimeUp}
                />
                {answer}
              </label>
            </div>
          ))}
          {isLastQuestion ? (
            <button
              className="submit"
              onClick={handleSubmitClick}
              disabled={isTimeUp}
            >
              Submit
            </button>
          ) : (
            <div>
            <button
              className="next"
              onClick={handleNextClick}
              disabled={!isAnswerSelected || isTimeUp}
            >
              Next
            </button>
            <Link className="end" to={'/category'}>End Quiz</Link>
               </div>
          )}
        </div>
      </div>
      {isTrue && <Score score={score} stopTimer={() => setTime(0)} />}
    </div>
  );
}

export default Quiz;

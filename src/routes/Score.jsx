import React from "react";
import { Link } from "react-router-dom";


function Score({ score }) {
  return (
    <div className="score-box">
      <img src="/images/trophy.png" alt="" />
      <h3>Score</h3>
      <p>
        You Scored <b>{score}</b> out of 30 Questions
      </p>
      <Link className="btn btn-restart" to={'/Category'}>Retake quiz</Link>
    </div>
  );
}

export default Score;

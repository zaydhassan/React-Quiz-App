import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import '../index.css'

function Guide() {

    return ( 
        <div className='guide'>
            <div className='container-fluid header'>
                <Link className='btn-back' to={'/Category'}> &larr; </Link>
               <h3 className='header-text'>Quiz Instructions</h3>
            </div>
            <ul>
                <li>To begin the quiz, click on the <b>"Start"</b> button on the main screen.</li>
                <li>You will be presented with a series of questions, each with <b>multiple choice answers.</b></li>
                <li>Read the question <b>carefully</b> and select the answer that you think is correct.</li>
                <li>You will <b>not</b> be able to change your answer, hence you have only one attempt at each question</li>
                <li>You wil <b>not</b> be able to go back to previous questions</li>
                <li>You cannot proceed to the next question <b>until you have answered the current one</b></li>
                <li>You will be presented with <b>30 questions</b> to answer.</li>
                <li>You have <b>30 minutes</b> to answer all questions</li>
                <li>The test will <b>automatically be submitted</b> if youre not able to complete and submit 
                    the test within the stipulated 30 minutes.
                </li>
                <li>At the end of the quiz, you will be shown your <b>score </b></li>
                <li>You can retake the quiz by clicking on the <b>"Restart Quiz"</b> button.</li>
                <li>If you need help or have any questions, please refer to the <b>FAQ section or contact us</b>
                     through the provided contact information.</li>
                <li>Enjoy the quiz and have fun!</li>
            </ul>

            <Link className="btn btn-start" to={'/quiz'}>Start Quiz </Link>
        </div>
    )
  }
  
  export default Guide;
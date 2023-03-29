import React from "react";
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";


function Root() {


    return (
      <div className="home">
        <motion.div
        animate={{y:100}}
        transition={{duration: 3}}>
            <div className='container'>
            <img className='logo' src="/images/quizmag.png" alt="logo" />
            <h1>Quiz Mag</h1>
            <p>Challenge yourself, test your knowledge</p>
            </div>
            <Link className="btn btn-continue" to={'category'}>Continue</Link>
            <div className="attribution">
            <p>Developed by Husayn</p>
            <a href="https://www.github.com/Husayn01"><i class="fab fa-github"></i></a>
            <a href="https://www.facebook.com/hussaini.ahmed.1293"><i class="fab fa-facebook"></i></a>
            <a href="https://mobile.twitter.com/Husayn_01"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/mwlite/in/hussaini-ahmed-a51232252"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </motion.div>
      </div>
    )
  }
  
  export default Root;

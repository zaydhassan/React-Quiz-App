import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createPopper} from '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from "react-router-dom";
import '../index.css'

function Category() {

    return ( 
        <div className='category'>
            <div className='container-fluid header'>
               <h3 className='header-text'>Quiz Category</h3>
            </div>
           <div id="accordion">

            <div class="card">
            <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                <img src="/images/book.png" alt="" />
                <br />
                <h4>General Reasoning</h4>
                </a>
            </div>
            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                This category typically involves questions that test a person's knowledge about various topics. 
                The questions may cover a broad range of subjects including history, geography, science, politics, current events, and pop culture.
                <br />
                <Link className="btn btn-start" to={'/guide'}>Start Quiz </Link>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                <img src="/images/light-bulb.png" alt="" />
                <br />
                <h4>Logical Reasoning</h4>
                </a>
            </div>
            <div id="collapseTwo" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                This category typically involves questions that test a person's ability to reason and think logically. 
                The questions may involve patterns, deductive reasoning, syllogisms, analogies, and critical thinking.
                <br />
                <Link className="btn btn-start" to={'/category'}>Coming soon</Link>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                <img src="/images/numbers.png" alt="" />
                <br />
                <h4>Numerical Reasoning</h4>
                </a>
            </div>
            <div id="collapseThree" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                This category typically involves questions that test a person's ability to understand and work with numbers.
                 The questions may involve arithmetic, algebra, geometry, statistics, and probability.
                <br />
                <Link className="btn btn-start" to={'/category'}>Coming soon</Link>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#Four">
                <img src="/images/person.png" alt="" />
                <br />
                <h4>Verbal Reasoning</h4>
                </a>
            </div>
            <div id="collapseFour" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                This category typically involves questions that test a person's ability to understand, analyze, and draw conclusions from written text.
                 The questions may test the person's understanding of vocabulary, grammar, comprehension, and verbal ability.

                <br />
                <Link className="btn btn-start" to={'/category'}>Coming soon </Link>
                </div>
            </div>
            </div>

            </div>
        </div>
    )
  }
  
  export default Category;
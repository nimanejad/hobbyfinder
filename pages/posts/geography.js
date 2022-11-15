import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
document.body.style.backgroundImage =
"url('/arts-and-crafts.jpeg')";
export default function Music() {   
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [str, setStr] = useState("");
  const questions = [
    {
      text: "Are you willing to spend a lot of money on the hobby?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Do you mind getting yourself or your clothing messy?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Would you consider yourself a patient person?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Do you mind taking on a hobby that is time consuming?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Do you have any sort of natural talent in the Arts and Crafts?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: false },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } 
    else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className={styles.title}>
      Arts & Crafts Questions
      </h1>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
             {/* Based on the score {score}.  */}
             Based on your answers, 
            {(score === 0) && <> the hobby recommended would be not in this field.</>} 
            {(score === 1) && <> the hobby recommended would be Cooking .</>} 
            {(score === 2) && <> the hobby recommended would be Singing.</>} 
            {(score === 3) && <> the hobby recommended would be Painting.</>} 
            {(score === 4) && <> the hobby recommended would be Music Production.</>} 
            {(score === 5) && <> the hobby recommended would be Photography.</>} 
            <br/>
            {/* {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%) */}
          </h2>
          <div className={styles.grid}>
          {/* Restart Questionnaire */}
          <a className={styles.card}>
          <div onClick={() => restartGame()}>
            <h2>Restart Questionnaire</h2>
          </div>
          </a>
            {/* Back to home screen*/}
            <a className={styles.card}> 
            <div onClick={() => Router.back()}> 
            <h2>Home Screen</h2> 
            </div> 
           </a>
          </div>
          </div>
      ) : (
        /* 5. Question Card  */
        <main className={styles.main}>
         <div className={styles.grid}>
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}&nbsp;
          </h2>
          <h2>{questions[currentQuestion].text}</h2>

          {/* List of possible answers  */}
            {questions[currentQuestion].options.map((option) => {
              return (

                <a className={styles.card}
                  key={option.Answer}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </a>
              );
            })}
        </div>
        </main>
      )}
    </div>
  );
}
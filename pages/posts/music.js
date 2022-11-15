import React, { useState } from "react";
import styles from '../../styles/Home.module.css'

export default function Music() {
      
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Are you skilled at playing any sports?",
      options: [
        { Answer: 0, text: "Agree", isCorrect: true},
        { Answer: 1, text: "Somewhat Agree", isCorrect: true},
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false},
        { Answer: 3, text: "Disagree", isCorrect: false},
      ],
    },
    {
      text: "You like to exercise in the snow?",
      options: [
        { Answer: 0, text: "Agree", isCorrect: true},
        { Answer: 1, text: "Somewhat Agree", isCorrect: true},
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false},
        { Answer: 3, text: "Disagree", isCorrect: false},
      ],
    },
    {
      text: "You like to exercise more with your hands?",
      options: [
        { Answer: 0, text: "Agree", isCorrect: true},
        { Answer: 1, text: "Somewhat Agree", isCorrect: true},
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false},
        { Answer: 3, text: "Disagree", isCorrect: false},
      ],
    },
    {
      text: "You like to exercise more with your feet?",
      options: [
        { Answer: 0, text: "Agree", isCorrect: true},
        { Answer: 1, text: "Somewhat Agree", isCorrect: true},
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false},
        { Answer: 3, text: "Disagree", isCorrect: false},
      ],
    },
    {
      text: "You like to exercise water-related sports?",
      options: [
        { Answer: 0, text: "Agree", isCorrect: true},
        { Answer: 1, text: "Somewhat Agree", isCorrect: true},
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false},
        { Answer: 3, text: "Disagree", isCorrect: false},
      ],
    },
    {
      text: "You like to use equipment instead of your body when you exercise?",
      options: [
        { Answer: 0, text: "Agree", isCorrect: true},
        { Answer: 1, text: "Somewhat Agree", isCorrect: true},
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false},
        { Answer: 3, text: "Disagree", isCorrect: false},
      ],
    },
    {
      text: "Which of the following describes playing a poece of music alone?",
      options: [
        { Answer: 0, text: "Duet", isCorrect: false },
        { Answer: 1, text: "Solo", isCorrect: true},
        { Answer: 2, text: "Symphony", isCorrect: false },
        { Answer: 3, text: "Quartet", isCorrect: false },
      ],
    },
    {
      text:"In an Orchestra who directs the musicians?" ,
      options: [
        { Answer: 0, text: "The Conductor", isCorrect: true },
        { Answer: 1, text: "The Manager", isCorrect: false },
        { Answer: 2, text: "The Main Musician", isCorrect: false },
        { Answer: 3, text: "The Best Musician", isCorrect: false },
      ],
    },
    {
      text: "How many musicians are in a duet?",
      options: [
        { Answer: 0, text: "One", isCorrect: false },
        { Answer: 1, text: "Two", isCorrect: true },
        { Answer: 2, text: "Three", isCorrect: false },
        { Answer: 3, text: "Four", isCorrect: false },
      ],
    },
    {
      text: "Which member of an orchestra holds a baton?",
      options: [
        { Answer: 0, text: "Percussionist", isCorrect: false },
        { Answer: 1, text: "Conductor", isCorrect: true },
        { Answer: 2, text: "French Horn Player", isCorrect: false },
        { Answer: 3, text: "Violinist", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
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
      Sports Questions
      </h1>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Your Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <main className={styles.main}>
         <div className={styles.grid}>
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
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


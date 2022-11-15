import React, { useState } from "react";
import styles from '../../styles/Home.module.css'

export default function Music() {
      
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  var str = "";
  //const [str, setStr] = useState(0);

  const questions = [
    {
      text: "Are you a visual person?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Are you a creative person?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: false },
        { Answer: 1, text: "Somewhat Agree", isCorrect: false },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: true},
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "How much time are you willing to commit to this hobby?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: false },
        { Answer: 1, text: "Somewhat Agree", isCorrect: false },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: true},
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "How much money are you willing to spend on this hobby?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: false },
        { Answer: 1, text: "Somewhat Agree", isCorrect: false },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: true},
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Do you prefer to do a hobby that is more 'You Time' or a hobby that helps others?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: false },
        { Answer: 1, text: "Somewhat Agree", isCorrect: false },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: true},
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
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
    } 
    else {
      let str;
      if(score == 5){
        str = "Based on the score{score}.The hobbies recommended would be Photogtaphy and Music Production.";
      }
      else if(score == 4) {
        str = "Based on the score {score}. The hobbies recommended would be Painting and Cooking.";
      }
      else if(score == 3) {
        str = "Based on the score {score}. The hobbies recommended would be Graffiti and Singing.";
      } 
      else{
        str = "Based on the score {score} and below, we recommend you try hobbies in other fields.";
      }
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
      MusicQuestions
      </h1>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {str}
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

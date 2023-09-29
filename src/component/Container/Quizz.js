import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import quizz from "../../assets/Data/quizz";
import classes from "./Quizz.module.css";
import { FaClock,FaVenus,FaMars } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
const Quizz = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showJustification, setShowJustification] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleStartQuiz = () => {
    setShowJustification(false);
    setCurrentQuestion(0);
    setQuizComplete(false);
    setShowQuiz(true);
  };
  const handleStartQuiz2 = () => {
    setShowJustification(false);
    setCurrentQuestion(0);
    setQuizComplete(false);
    setShowQuiz(false);
  };
  const handleAnswer = (selectedChoice) => {
    if (selectedChoice.typereponse === "F") {
      setShowJustification(true);
      setShowQuiz(false);
    } else {
      setShowJustification(false);
      if (currentQuestion === quizz.length - 1) {
        setQuizComplete(true);
        setShowQuiz(false);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  return (
    <div>
      <Row>
        <Col md={6} className={` ${classes.section1}`}>
          <div className={` ${classes.Container}`}>
            <h1>PUIS-JE DONNER ?</h1>
            <p>
              Découvrez en moins de 5 minutes si vous pouvez donner votre sang.
              Un donneur averti en vaut deux : le résultat de ce quiz optionnel
              est donné à titre indicatif. Seul le personnel de santé peut
              confirmer votre éligibilité lors de l'entretien médical préalable
              au don.
            </p>
          </div>
        </Col>
        <Col md={6} className={` ${classes.section2}`}>
          <div className={` ${classes.Container2}`}>
            {!showQuiz ? (
              <>
                {showJustification && (
                  <div>
                    <h2>
                      Désolé, vous ne pouvez pas donner votre sang. Mais vous
                      pouvez donner de votre temps !
                    </h2>
                    <p>{quizz[currentQuestion].choices[0].justification}</p>
                    <button  className={` ${classes.btn}`}
                    onClick={handleStartQuiz2}>
                      Recommencer le quiz
                    </button>
                  </div>
                )}

                {quizComplete && !showJustification && (
                  <div  className={` ${classes.end}`}>
                    <h2>
                      Super, d'après les informations indiquées, vous pouvez
                      donner votre sang !{" "}
                    </h2>
                    <h5>
                      A noter : seul le personnel de santé de l’EFS peut
                      confirmer votre aptitude au don sur place lors de
                      l'entretien médical préalable au don.
                    </h5>
                    <p>
                      Pour prendre un rendez-vous en ligne, consultez la liste
                      des lieux de don près de chez vous.
                    </p>
                    <button  className={` ${classes.btn}`}
                     onClick={handleStartQuiz2}>
                      Recommencer le quiz
                    </button>
                  </div>
                )}

                {!quizComplete && !showJustification && (
                  <div className={` ${classes.start}`}>
                    <h1>Don de sang, je m'autoévalue !</h1>
                    <h6>
                      <spam>
                        <FaClock size="1em" color="black" />
                      </spam>
                      <spam> 5 min</spam>
                    </h6>
                    <p>
                      Ce test est la première étape pour savoir si vous pouvez
                      donner dès maintenant.
                    </p>
                    <h6>C’est parti !</h6> <hr />
                    <h6>Etes-vous une femme ou un homme ?</h6>
                    <button
                      className={` ${classes.btnstart}`}
                      onClick={handleStartQuiz}
                    >
                         <FaVenus size="1em" color="black" />
                      <spam> Femme</spam>
                    </button>
                    <button
                      className={` ${classes.btnstart}`}
                      onClick={handleStartQuiz}
                    >
                         <FaMars size="1em" color="black" />
                         <spam> Homme</spam>
                    </button>
                  </div>
                )}
              </>
            ) : (
              currentQuestion < quizz.length && (
                <div  className={` ${classes.SectionQuiz}`}
                key={quizz[currentQuestion].id}>
                  <h3>{Math.floor((quizz[currentQuestion].id * 100) / 17)} % du Quiz</h3>
                  <ProgressBar now={Math.floor((quizz[currentQuestion].id * 100) / 17)} />
                  <h4>{quizz[currentQuestion].question}</h4>
                  {quizz[currentQuestion].choices.map((choice) => (
                    <button  className={` ${classes.btnoptions}`}
                      key={choice.id}
                      onClick={() => handleAnswer(choice)}
                    >
                      {choice.reponse}
                    </button>
                  ))}
                </div>
              )
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Quizz;

import * as React from "react"
import * as styles from './quiz.module.css';
import Question from "./question/question";
import QuizForm from "./quiz-form/quiz-form";
import QuestionNumberBar from "./question-number-bar/question-number-bar";

export default function Quiz({ data }) {

  const [ currentQuestion, setCurrentQuestion] = React.useState({});
  const [ questionNumber, setQuestionNumber] = React.useState(0);
  const [ totalScore, setTotalScore ] = React.useState(0);
  const [ result, setResult ] = React.useState([]);

  const handleAnswerClick = (answerPoints, question, answer) => {
    setTotalScore(totalScore + answerPoints)
    setQuestionNumber(questionNumber + 1)
    setCurrentQuestion(data[questionNumber + 1])
    setResult([...result, {question: `${questionNumber + 1} - ${question}`, answer}])
  }

  React.useEffect(() => {
    setCurrentQuestion(data[0])
  }, [])

  return (
    <section className={styles.quiz}>
      {
        questionNumber < 7
        ? <Question question={currentQuestion} answerClickHandler={handleAnswerClick} />
        : <QuizForm quizResult={result} totalScore={totalScore} />
      }
      <QuestionNumberBar questionNumber={questionNumber} score={totalScore}/>
    </section>
  )
}
import * as React from "react"
import * as styles from './quiz.module.css';
import Question from "./question/question";
import QuizForm from "./quiz-form/quiz-form";
import QuestionNumberBar from "./question-number-bar/question-number-bar";

export default function Quiz({ data, isPreview }) {

  const [ currentQuestion, setCurrentQuestion] = React.useState({});
  const [ questionNumber, setQuestionNumber] = React.useState(0);
  const [ totalScore, setTotalScore ] = React.useState(0);
  const [ result, setResult ] = React.useState([]);

  const handleAnswerClick = (answerPoints, question, answer) => {
    setTotalScore(totalScore + answerPoints)
    setQuestionNumber(questionNumber + 1)
    setCurrentQuestion(data.questions[questionNumber + 1])
    setResult([...result, {question: `${questionNumber + 1} - ${question}`, answer}])
  }

  React.useEffect(() => {
    setCurrentQuestion(data.questions[0])
  }, [])

  React.useEffect(() => {
    if (questionNumber < 7) console.log(result);
  })
  console.log(data);
  return (
    <section className={styles.quiz}>
      { isPreview
        ? <div className={styles.preview}>
            {
              data.questions.map((previewQuestion, index) => (
                <Question key={index} question={previewQuestion} answerClickHandler={() => false}/>
              ))
            }
            <QuizForm quizResult={result} totalScore={totalScore} formText={data.formText} />
          </div> 
        : questionNumber < 7
          ? <Question question={currentQuestion} answerClickHandler={handleAnswerClick} />
          : <QuizForm quizResult={result} totalScore={totalScore} formText={data.formText} />

      }
      <QuestionNumberBar questionNumber={questionNumber} score={totalScore}/>
    </section>
  )
}
import * as React from "react"
import * as styles from './question.module.css';
import Loader from '../../../ui/loader/loader';

export default function Question({ question, answerClickHandler }) {

  if (!question.questionText) return <Loader />
  return (
    <div className={styles.question}>
      <h1 className={styles.questionText}><span>{question.questionText}</span></h1>
      <ul className={styles.answers}>
        {
          question.answers.map((answer, index) => (
            <li key={index} className={styles.answer}>
              <button
                type='button'
                className={styles.answerButton}
                onClick={() => answerClickHandler(
                  answer.points,
                  question.questionText,
                  `${index + 1} - ${answer.answerText}`,
                )}
              >{answer.answerText}</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
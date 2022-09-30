import * as React from "react"
import * as styles from './question-number-bar.module.css';

export default function QuestionNumberBar({ questionNumber, score }) {

  return (
    <div className={styles.bar}>
      <div className={styles.point} style={{ width: `${(questionNumber + 1) * 12.5}%`}}></div>
      <div className={styles.score}>{score}</div>
    </div>
  )
}
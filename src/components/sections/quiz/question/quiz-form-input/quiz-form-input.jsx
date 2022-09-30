import * as React from "react"
import * as styles from './quiz-form-input.module.css';
import arrowIcon from '../../../../../images/icons/arrow.svg';
import useForm from '../../../../../hooks/use-form';

export default function QuizFormInput({
  onClickHandler,
  question,
  points
}) {

  const {values, handleChange, isValid, checkValidity, handleReset} = useForm()
  const [ isActive, setIsActive ] = React.useState()

  const handleButtonClick = () => {
    onClickHandler(
      points,
      question,
      `Свой ответ - ${values.answer}`
    )
    handleReset({answer: ''})
  }

  const handleInputChange = (evt) => {
    handleChange(evt)
    checkValidity(evt)
  }

  return (
    <form className={`${styles.inputContainer} ${isActive ? styles.activeContainer : {}}`}>
      <input
        className={styles.input}
        type='text'
        value={values.answer}
        onChange={handleInputChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholder='Ваш ответ'
        minLength='1'
        name="answer"
        required
      />
      <button 
        type='button'
        className={`${styles.inputButton} ${isValid ? styles.activeInput : {}}`}
        onClick={handleButtonClick}
        disabled={!isValid}
      >
        <img
          src={arrowIcon}
          className={styles.arrowIcon}
        />
      </button>
    </form>
    
  )
}
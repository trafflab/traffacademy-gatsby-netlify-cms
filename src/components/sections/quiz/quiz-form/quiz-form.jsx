import * as React from "react"
import * as styles from './quiz-form.module.css';
import { navigate } from "gatsby";
import useForm from '../../../../hooks/use-form';
import BasicButton from "../../../ui/basic-button/basic-button";
import BasicInput from "../../../ui/basic-input/basic-input";
import {Loader} from "../../../ui";
import PhoneInput from 'react-phone-input-2';
import queryString from "query-string";

export default function QuizForm({ quizResult, totalScore, formText }) {

  const {values, handleChange, isValid, handleReset, checkValidity} = useForm()
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef = React.useRef()

  const navigateToResult = () => {
    if (totalScore > 12) navigate('https://webinar.traffacademy.com/')
    else navigate('https://webinartwo.traffacademy.com/')
  }

  const handleSendClick = (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    const utmData = typeof window !== 'undefined' ? queryString.parse(window.location.search) : false;

    const dataToSend = {
      from: 'quiz',
      name: values.name,
      phone: values.phone || '',
      email: values.tg || '',
      utm_source: utmData?.utm_source || '',
      utm_content: utmData?.utm_content || '',
      utm_medium: utmData?.utm_medium || '',
      utm_campaign: utmData?.utm_campaign || '',
      utm_term: utmData?.utm_term || '',
      utm_referrer: utmData?.utm_referrer || '',
      question1: `${quizResult[0].question} - ${quizResult[0].answer}`,
      question2: `${quizResult[1].question} - ${quizResult[1].answer}`,
      question3: `${quizResult[2].question} - ${quizResult[2].answer}`,
      question4: `${quizResult[3].question} - ${quizResult[3].answer}`,
      question5: `${quizResult[4].question} - ${quizResult[4].answer}`,
      question6: `${quizResult[5].question} - ${quizResult[5].answer}`,
      question7: `${quizResult[6].question} - ${quizResult[6].answer}`,
    }

    fetch('https://trafflab-api.space/rest-amo.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    })
    .then(data => {
      if (data.ok) {
        setIsLoading(false)
        navigateToResult()
        if (typeof window !== 'undefined') window.yaCounter90615658.reachGoal('send_form');
        return data.json()
      } else {
        setIsLoading(false)
        navigateToResult()
        if (typeof window !== 'undefined') window.yaCounter90615658.reachGoal('send_form_error');
      }
    })
    .then((data) => console.log(data))
    .catch(err => {
      setIsLoading(false)
      navigateToResult()
      console.log(err)
      if (typeof window !== 'undefined') window.yaCounter90615658.reachGoal('send_form_error');
    })
}

  React.useEffect(() => {
    handleReset()
  }, [])

  console.log(isValid && (values.tg || values.phone));
  console.log(isValid)
  console.log(values.tg)
  console.log(values.phone)

  return (
    <form ref={formRef} className={styles.form}>
      <h1 className={styles.title}><span>{formText}</span></h1>
      <div className={styles.inputsContainer}>
        <BasicInput
          name='name'
          placeholder='??????'
          value={values.name}
          onChange={handleChange}
          minLength={1}
          isRequired={true}
          type='text'
        />
        <PhoneInput 
          inputProps={{
            name: 'phone',
            minLength: "20",
          }}
          placeholder='?????????????? whatsup'
          value={values.phone}
          onChange={handleChange}
          inputClass={styles.phoneInput}
          containerClass={styles.phoneInputContainer}
          buttonClass={styles.phoneInputButton}
          dropdownClass={styles.phoneInputDropdown}
          searchClass={styles.phoneInputSearch}
          disableDropdown={true}
          isValid={() => checkValidity(formRef)}
        />
        <BasicInput
          name='tg'
          placeholder='?????? telegram'
          value={values.tg}
          onChange={handleChange}
          minLength={1}
          type='text'
        />
      </div>
      {
        isLoading
          ? <div style={{alignSelf: 'center'}}><Loader/></div>
          : <div className={styles.buttonContainer}>
              <BasicButton
                type="submit"
                text='??????????????????'
                isActive={isValid && (Boolean(values.tg) || Boolean(values.phone))}
                handler={handleSendClick}
              />
            </div>
      }
    </form>
  )
}



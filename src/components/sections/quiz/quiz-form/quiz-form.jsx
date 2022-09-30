import * as React from "react"
import * as styles from './quiz-form.module.css';
import { navigate } from "gatsby";
import useForm from '../../../../hooks/use-form';
import BasicButton from "../../../ui/basic-button/basic-button";
import BasicInput from "../../../ui/basic-input/basic-input";
import {Loader} from "../../../ui";
import PhoneInput from 'react-phone-input-2';
import queryString from "query-string";

export default function QuizForm({ quizResult, totalScore }) {

  const {values, handleChange, isValid, handleReset, checkValidity} = useForm()
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef = React.useRef()


  React.useEffect(() => {
    handleReset()
  }, [])

  const handleSendClick = () => console.log(quizResult, totalScore);

  return (
    <form ref={formRef} className={styles.form}>
      <h1 className={styles.title}><span>Оставьте вашу почту и номер телефона для связи в Telegram или WhatsApp, чтобы ребята из команды связались с вами и предоставили доступ к бесплатному курсу: </span></h1>
      <div className={styles.inputsContainer}>
        <BasicInput
          name='name'
          placeholder='Имя'
          value={values.name}
          onChange={handleChange}
          minLength={1}
          isRequired={true}
          type='text'
        />
        <PhoneInput 
          inputProps={{
            name: 'phone',
            required: true,
            minLength: "20",
          }}
          placeholder='Телефон'
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
          name='email'
          placeholder='E-mail'
          value={values.email}
          onChange={handleChange}
          minLength={1}
          isRequired={true}
          type='email'
        />
      </div>
      {
        isLoading
          ? <div style={{alignSelf: 'center'}}><Loader/></div>
          : <div className={styles.buttonContainer}>
              <BasicButton
                type="submit"
                text='Отправить'
                isActive={isValid}
                handler={handleSendClick}
              />
            </div>
      }
    </form>
  )
}


// const handleSendClick = (evt) => {
//   evt.preventDefault()
//   setIsLoading(true)
//   const utmData = typeof window !== 'undefined' ? queryString.parse(window.location.search) : false;

//   const dataToSend = {
//     name: values.name,
//     phone: values.phone,
//     email: '',
//     utm_source: utmData?.utm_source || '',
//     utm_content: utmData?.utm_content || '',
//     utm_medium: utmData?.utm_medium || '',
//     utm_campaign: utmData?.utm_campaign || '',
//     utm_term: utmData?.utm_term || '',
//     utm_referrer: utmData?.utm_referrer || '',
//   }
//   console.log(dataToSend);

//   fetch('https://trafflab-api.space/rest-amo.php', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dataToSend)
//   })
//   .then(data => {
//     if (data.ok) {
//       setIsLoading(false)
//       navigate('/success')
//       if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form');
//       return data.json()
//     } else {
//       setIsLoading(false)
//       navigate('/success')
//       if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form_error');
//     }
//   })
//   .then((data) => console.log(data))
//   .catch(err => {
//     setIsLoading(false)
//     navigate('/success')
//     console.log(err)
//     if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form_error');
//   })
// }
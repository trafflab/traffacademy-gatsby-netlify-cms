import * as React from "react"
import * as styles from './form-popup.module.css';
import PopupLayout from "../popup-layout-2/popup-layout";
import { MediaGatsbyImage } from "../../ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { navigate } from "gatsby";
import useForm from '../../../hooks/use-form';
import BasicButton from "../../ui/basic-button/basic-button";
import BasicInput from "../../ui/basic-input/basic-input";
import {Loader} from "../../ui";
import PhoneInput from 'react-phone-input-2';
import queryString from "query-string";

export default function FormPopup({ closeHandler, isOpen, data }) {

  const {values, handleChange, isValid, handleReset, checkValidity} = useForm()
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef = React.useRef()

  const handleSendClick = (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    const utmData = typeof window !== 'undefined' ? queryString.parse(window.location.search) : false;

    const dataToSend = {
      from: 'landing',
      name: values.name,
      phone: values.phone,
      email: '',
      utm_source: utmData?.utm_source || '',
      utm_content: utmData?.utm_content || '',
      utm_medium: utmData?.utm_medium || '',
      utm_campaign: utmData?.utm_campaign || '',
      utm_term: utmData?.utm_term || '',
      utm_referrer: utmData?.utm_referrer || '',
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
        navigate('/success')
        if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form');
        return data.json()
      } else {
        setIsLoading(false)
        navigate('/success')
        if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form_error');
      }
    })
    .then((data) => console.log(data))
    .catch(err => {
      setIsLoading(false)
      navigate('/success')
      console.log(err)
      if (typeof window !== 'undefined') window.yaCounter89616968.reachGoal('send_form_error');
    })
  }

  React.useEffect(() => {
    handleReset()
  }, [])

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.gift}>
          <div className={styles.imageContainer}><MediaGatsbyImage image={data.bookImage} image_480={data.bookImage_480} /></div>
          <pre className={styles.giftText}>???????? ??5 ?????????? ?????? ?????????????????? ???? 3000$ ?? ?????????? ?? ????????????????<span style={{color: 'var(--c-purple)'}}> ?? ??????????????</span></pre>
        </div>

        <form ref={formRef} className={styles.form}  >
          <div className={styles.textContainer}>
            <pre className={styles.title}>{data.title}</pre>
            <pre className={styles.subtitle}>{data.subtitle}</pre>
          </div>
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
                required: true,
                minLength: "20",
              }}
              placeholder='??????????????'
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
            {/* <BasicInput
              name='email'
              placeholder='E-mail'
              value={values.email}
              onChange={handleChange}
              minLength={1}
              isRequired={true}
              type='email'
            /> */}
          </div>
          {
            isLoading
              ? <div style={{alignSelf: 'center'}}><Loader/></div>
              : <div className={styles.buttonContainer}>
                  <BasicButton
                    type="submit"
                    text='??????????????????'
                    isActive={isValid}
                    handler={handleSendClick}
                  />
                </div>
          }
        </form>

      </div>
    </PopupLayout>
  )
}
import * as React from "react"
import * as styles from './opening.module.css';
import { Is480Context, FormContext } from "../../../utils/contexts";
import { BasicButton, MediaGatsbyImage } from '../../ui/'
import OpeningCardList from './opening-card-list/opening-card-list';
import { GiftIcon } from "../../ui/icons";
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября',  'октября',  'ноября', 'декабря']

export default function Opening({ data }) {
  const is480 = React.useContext(Is480Context);
  const openFormPopup = React.useContext(FormContext);
  const [ eventTime, setEventTime ] = React.useState();

  React.useEffect(() => {
    const time = new Date(Date.now() + 86400000)
    setEventTime(`${time.getDate()} ${months[time.getMonth()]}`);

  }, [])
  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <div className={styles.about}>
            <div className={styles.tag}>{data.tag}</div>
            <pre className={styles.time}>{`${eventTime} в 19:00 МСК`}</pre>
          </div>

          <h1 className={styles.title}>{data.title[0].part}<br/>{data.title[1].part}</h1>

          <div className={styles.buttonContainer}>
            <BasicButton handler={openFormPopup} text={is480 ? data.buttonText_480 : data.buttonText}/>

          </div>
          <div className={styles.gift}>
            <GiftIcon />
            <pre className={styles.giftText}>{is480 ? data.giftText_480 : data.giftText}</pre>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage
            image={data.personImage}
            image_480={data.personImage_480}
            alt={data.imageAlt}
          />
          <div className={styles.nameContainer}>
            <pre className={styles.name}>{data.name}</pre>
            <pre className={styles.jobTitle}>{data.jobTitle}</pre>
          </div>
        </div>
      </div>
      <OpeningCardList cards={data.cards} />
    </section>
  )
}



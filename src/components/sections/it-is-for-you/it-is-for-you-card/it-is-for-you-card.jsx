import * as React from "react"
import * as styles from './it-is-for-you-card.module.css';
import { MediaGatsbyImage } from "../../../ui";

export default function ItIsForYouCard({ data }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}><MediaGatsbyImage image={data.cardImage} image_480={data.cardImage} alt={data.imageAlt}/></div>
      <pre className={styles.text}>{data.text}</pre>
    </article>
  )
}
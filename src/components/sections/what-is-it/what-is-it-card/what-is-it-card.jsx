import * as React from "react"
import * as styles from './what-is-it-card.module.css';
import { IconWrapper } from "../../../ui";

export default function WhatIsItCard({ data, color, icon: Icon  }) {
  return (
    <article className={styles.card}>
      <IconWrapper color={color}><Icon/></IconWrapper>
      <pre className={styles.text}>{data.text}</pre>
    </article>
  )
}
import * as React from "react"
import * as styles from './nav-list-element.module.css';

export default function NavListElement({ text, linkTo }) {

  return (
    <li className={styles.listElement}>
      <a
        href={linkTo}
        className={styles.link}
      >{text}</a>
    </li>
  )
}
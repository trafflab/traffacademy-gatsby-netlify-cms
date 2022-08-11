import * as React from "react"
import * as styles from './nav-popup-element.module.css';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NavPopupElement({ text, linkTo, closeHandler }) {
  
  return (
    <li onClick={closeHandler} className={styles.listElement}>
      <a
        href={linkTo}
        className={styles.link}
      >{text}</a>
    </li>
  )
}
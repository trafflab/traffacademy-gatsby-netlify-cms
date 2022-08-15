import * as React from "react"
import * as styles from './footer.module.css';
import Logo from '../../../components/common/logo/logo';
import NavList from '../../common/nav-list/nav-list';
import ContactsList from '../../common/contacts-list/contacts-list';
import CircledIconWrapper from '../../ui/circled-icon-wrapper/circled-icon-wrapper';
import { MailIcon, SkypeIcon } from "../../ui/icons";
import { Is480Context } from "../../../utils/contexts";
import { Link } from "gatsby";

export default function Footer() {
  const is480 = React.useContext(Is480Context)
  const [year, setYear] = React.useState('');

  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, []);

  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Link to={'/'}><Logo /></Link>
          <ul className={styles.requisitesList}>
            <li><pre>ООО "КПМ"</pre></li>
            <li><pre>ИНН 9701164081</pre></li>
          </ul>
        </div>

        <div className={styles.navContainer}>
          <NavList isFooter={true} />
          <div className={styles.docs}>
            <a href='https://trafflab.online/oferta' >Договор оферты</a>
            <a href='https://trafflab.online/policy' >Политика конфиденциальности</a>
          </div>
        </div>
        <pre className={styles.year}>{year} &copy; TraffLab. Все права защищены.</pre>

        <div className={styles.contactsContainer}>
          <ContactsList />
          <ul className={styles.otherContactslist}>

            <li className={styles.listEement}>
              <CircledIconWrapper><MailIcon/></CircledIconWrapper>
              <a href="mailto:admin@trafflab.com" className={styles.mailto}>support@trafflab.com</a>
            </li>
            <li className={styles.listEement}>
              <CircledIconWrapper><SkypeIcon/></CircledIconWrapper>
              <pre className={styles.contact}>support@trafflab.com</pre>
            </li>

          </ul>
        </div>

      </div>
    </footer>
  )
}
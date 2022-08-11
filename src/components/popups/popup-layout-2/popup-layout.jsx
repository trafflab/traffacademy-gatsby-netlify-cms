import * as React from "react"
import ReactDOM from "react-dom";
import * as styles from './popup-layout.module.css';
import useDelayUnmountState from '../../../hooks/use-delay-unmount-state';

const portalRoot = typeof document !== `undefined` ? document.getElementById('___portal') : null
export default function PopupLayout({children, isOpen, closeHandler}) {
  
  const shouldMount = useDelayUnmountState(!!isOpen, 350);
  const animation = isOpen ? {animation: 'openAniamtion 0.35s ease-out'} : {animation: 'closeAniamtion 0.35s ease-out forwards'}

  const overlayClose = (evt) => {
    if (evt.target.classList.contains(styles.popupLayout)) closeHandler()
  }
  React.useEffect(() => {
    if (shouldMount) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [shouldMount])
  return (
    (shouldMount && portalRoot)
      ? ReactDOM.createPortal((
          <section
            onClick={overlayClose}
            className={styles.popupLayout}
            style={animation}
          >
            {children}
          </section>
          ), portalRoot)
      : null
  )
}
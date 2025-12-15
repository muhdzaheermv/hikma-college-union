import  styles from '../../styles/Footer.module.css'

const GetInTouch = ({email}) => {
  return (
    <a  href='https://www.instagram.com/zaheermv/'    className={`${styles.getInTouchContainer}`}>
        <div    className={`${styles.transition}    ${styles.overlay}`}></div>
        <div    className={`${styles.getInTouch}`}>Developed by</div>
        <div    className={`${styles.email}`}>zaheermv{email}</div>
    </a>
  )
}

export default GetInTouch
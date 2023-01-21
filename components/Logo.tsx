import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='https://s4.aconvert.com/convert/p3r68-cdx67/aqvcx-g5cm9.svg' alt='next' />

    <strong>Nakafa</strong>
  </div>
);

export default Logo;

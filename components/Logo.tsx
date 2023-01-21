import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='./components/c.svg' alt='next' />

    <strong>Nakafa</strong>
  </div>
);

export default Logo;

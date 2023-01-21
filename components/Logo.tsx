import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='https://assets.charanquartz.vercel.app/a/w/docs.assets/charanquartzsdocumentation.svg' alt='next' />

    <strong>Nakafa</strong>
  </div>
);

export default Logo;

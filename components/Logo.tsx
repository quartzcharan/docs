import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='https://assets-charanquartz.netlify.app/a/w/docs.assets/cq.svg' alt='next' />

   <h1> <strong>Charanquartz's Documentation</strong></h1>
  </div>
);

export default Logo;

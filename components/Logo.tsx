import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='https://assets-charanquartz.netlify.app/a/w/docs.assets/cq.svg' alt='next' />
    <strong>Charanquartz's Documentation</strong>
    <img src='https://home.charanquartz.vercel.app/c.gif' alt='next' />
  </div>
);

export default Logo;

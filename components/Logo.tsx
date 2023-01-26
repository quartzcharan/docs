import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='https://assets-charanquartz.netlify.app/a/w/docs.assets/cq.svg' alt='next' />
    <strong>CQ's Docs </strong>
   
    </div>

);

export default Logo;

import styles from "./Logo.module.css";

const Logo = ({ className = "", ...props }) => (
  <div className={styles.logo}>
    <img src='https://assets-charanquartz.netlify.app/a/w/docs.assets/cq.svg' alt='next' />
    <strong>Charanquartz's Documentation</strong>
    <img src='https://home.charanquartz.vercel.app/c.gif' alt='next' />
    








    <audio controls autoplay  id="myaudio" hidden="" src="https://asset.charanquartz.vercel.app/assets/music.mp3" type ="audio/mp3">your browser does not support Html5</audio>
<audio controls autoplay  loop="true"id="myaudio1" hidden="" src="https://asset.charanquartz.vercel.app/assets/neptune.mp3" type ="audio/mp3">your browser does not support Html5</audio>

<script>
  var audio = document.getElementById("myaudio");
  audio.volume = 1;
</script>
<script>
  var audio = document.getElementById("myaudio1");
  audio.volume = 0.01;
</script>





  </div>
);

export default Logo;

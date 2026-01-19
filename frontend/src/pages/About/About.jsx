import ImgHoni from "../../assets/img/profile-pic-01-400x400.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHeader}>
        <h1>About</h1>
      </div>
      <div className={styles.aboutImgHoni}>
        <img
          src={ImgHoni}
          alt="Image of Honi in drawing style"
          height={200}
          className={styles.aboutHoniPic}
        />
        <div className={styles.imgOverlay}>HONI</div>
      </div>
    </div>
  );
}

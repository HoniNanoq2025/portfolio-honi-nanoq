import ImgHoni from "../../assets/img/profile-pic-01-400x400.png";
import Timeline from "../../components/Timeline/Timeline";
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
      <div className={styles.whoIsHoni}>
        <h2>Who is HONI?</h2>
        <p>HONI is a contraction of:</p>
        <p className={styles.name}>
          <span className={styles.bold}>H</span>ejdi{" "}
          <span className={styles.bold}>Ø</span>stergaard{" "}
          <span className={styles.bold}>NI</span>elsen
        </p>
      </div>
      <div className={styles.profileTxt}>
        <p className={styles.paragraph}>
          I was born in Herning, Denmark, and grew up in Gurre, Skrydstrup and
          Sunds.
        </p>
        <p className={styles.paragraph}>
          I am a quick study and thrive with steep learning curves.
          <br /> I am easily adaptable, whether it’s new surroundings, or new
          systems.
        </p>
        <p className={styles.paragraph}>
          I can also teach. For example, I trained several of the Elkjøp Content
          writers how to use CoreMedia for publishing content.
        </p>
        <p className={styles.paragraph}>
          In my spare time I enjoy reading and prefer reading books in English.
          It helps me maintain my English language skills.
        </p>
        <p className={styles.paragraph}>
          I also enjoy singing karaoke, creating decoupage, doing puzzles and,
          when it isn’t in storage, I enjoy making creative sticky vinyl
          projects with my Cricut.
        </p>
        <p className={styles.paragraph}>
          When I lived in Greenland, I used to participate in the yearly
          igloo-building event. Something that requires teamwork and
          collaboration.
        </p>
      </div>
      <Timeline />
    </div>
  );
}

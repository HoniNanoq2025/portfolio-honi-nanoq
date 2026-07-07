import { useState } from "react";
import ImgHoni from "../../assets/img/profile-pic-01-400x400.png";
import Timeline from "../../components/Timeline/Timeline";
import styles from "./About.module.css";

export default function About() {
  const [isTyped, setIsTyped] = useState(false);

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
        <p
          className={`${styles.name} ${styles.typewriter} ${isTyped ? styles.typed : ""}`}
          onAnimationEnd={() => setIsTyped(true)}
        >
          <span className={styles.bold}>H</span>ejdi{" "}
          <span className={styles.bold}>Ø</span>stergaard{" "}
          <span className={styles.bold}>NI</span>elsen
        </p>
      </div>
      <div className={styles.profileTxt}>
        <p className={styles.paragraph}>
          I enjoy understanding how digital products work, and even more, how
          they can work better.
        </p>
        <p className={styles.paragraph}>
          Whether I'm building a website, designing a user interface or learning
          a new technology, I usually start by asking questions.
        </p>
        <ul>
          <li className={styles.paragraph}>Why is this difficult to use?</li>
          <li className={styles.paragraph}>How could it be made simpler?</li>
          <li className={styles.paragraph}>
            What problem is this actually trying to solve?
          </li>
          <li className={styles.paragraph}>
            That curiosity has shaped both my education and my career.
          </li>
        </ul>
        <p className={styles.paragraph}>
          Before becoming a frontend developer, I spent more than a decade
          working with CMS platforms, digital content and cross-team
          coordination. I have worked with large-scale websites, multilingual
          content and product information across the Nordic markets, giving me
          an understanding of how digital products are built, maintained and
          improved over time.
        </p>
        <p className={styles.paragraph}>
          Studying frontend development allowed me to combine that experience
          with hands-on development. I enjoy working across the space between
          design and development, where user experience, technology and business
          needs all influence the final solution.
        </p>
        <p className={styles.paragraph}>
          The projects in this portfolio were created during my frontend
          education and reflect different aspects of how I like to work. Looking
          back at them while building this portfolio has also been an
          opportunity to reflect on the decisions I made, recognise what worked
          well and consider how I would approach the same challenges today.
        </p>
        <p className={styles.paragraph}>
          I'm naturally curious and enjoy learning new tools when they help
          solve real problems. Whether I'm working with React, WordPress, PHP or
          AI-assisted development, my focus is less about the technology itself
          and more about understanding which solution best fits the problem.
        </p>
        <p className={styles.paragraph}>
          Colleagues, former managers and teachers have described me as
          reliable, structured and quick to learn. I enjoy sharing knowledge,
          collaborating across disciplines and turning complex ideas into
          digital solutions that are easier to understand and use.
        </p>
        <p className={styles.paragraph}>
          Outside work, I enjoy reading, creative projects and exploring
          subjects that capture my curiosity. At the moment, that includes
          building a comprehensive listening guide for Big Finish's Doctor Who
          audio dramas. It's a personal project that combines research,
          information architecture and a genuine enthusiasm for making complex
          collections easier to navigate.
        </p>
      </div>
      <Timeline />
    </div>
  );
}

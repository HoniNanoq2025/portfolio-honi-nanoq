import MSTributeImg from "../../assets/img/projects/maggie-smith-tribute-school-project.png";
import BogormenImg from "../../assets/img/projects/bogormen-wordpress-school-project.png";
import CTMPodcastImg from "../../assets/img/projects/recall-the-midwife-podcast-project.png";
import SmartHomeImg from "../../assets/img/projects/smart-home-school-project.png";
import TardisMediaImg from "../../assets/img/projects/tardis-media-library-school-project-2025.png";
import JeopardyImg from "../../assets/img/projects/christmas-jeopardy-school-project-2025.png";
import BogormenPDF from "../../documents/Bogormen-wordpress-project-2025.pdf";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectWrapper}>
          <h3 className={styles.projectHeader}>
            Recall the Midwife unofficial podcast
          </h3>
          <a
            href="https://youtu.be/pn3QIgXJN-U"
            target="_blank"
            alt="Recall The Midwife unofficial podcast project YT video"
          >
            <img
              src={CTMPodcastImg}
              alt="Recall The Midwife unofficial podcast project"
              height={200}
            />
          </a>
          <a
            href="https://github.com/HoniNanoq2025/recall-the-midwife-unofficial-podcast.git"
            className={styles.gitHubLink}
            alt="link to project on GitHub"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className={styles.projectWrapper}>
          <h3 className={styles.projectHeader}>Maggie Smith Tribute</h3>
          <a
            href="https://honinanoq2025.github.io/hejdi-kulturformidleren-opg/"
            target="_blank"
            alt="Maggie Smith Tribute page"
          >
            <img
              src={MSTributeImg}
              alt="Maggie Smith Tribute page project"
              height={200}
            />
          </a>
          <a
            href="https://github.com/HoniNanoq2025/hejdi-kulturformidleren-opg.git"
            className={styles.gitHubLink}
            alt="link to project on GitHub"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className={styles.projectWrapper}>
          <h3 className={styles.projectHeader}>Smart Home</h3>
          <a
            href="https://honinanoq2025.github.io/SmartHome/"
            target="_blank"
            alt="Smart home of the future"
          >
            <img
              src={SmartHomeImg}
              alt="Smart home of the future project"
              height={200}
            />
          </a>
          <a
            href="https://github.com/HoniNanoq2025/SmartHome.git"
            className={styles.gitHubLink}
            alt="link to project on GitHub"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className={styles.projectWrapper}>
          <h3 className={styles.projectHeader}>Bogormen (The Bookworm)</h3>
          <a
            href={BogormenPDF}
            target="_blank"
            rel="noopener noreferrer"
            alt="Bogormen in Wordpress"
          >
            <img
              src={BogormenImg}
              alt="Bogormen Wordpress project"
              width={350}
              className={styles.bogormen}
            />
          </a>
          <a
            href={BogormenPDF}
            className={styles.gitHubLink}
            alt="link to project PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
        </div>
      </div>
    </div>
  );
}

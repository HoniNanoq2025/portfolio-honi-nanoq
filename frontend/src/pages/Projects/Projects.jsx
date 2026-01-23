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
          <div className={styles.links}>
            <a
              href="https://github.com/HoniNanoq2025/recall-the-midwife-unofficial-podcast.git"
              className={styles.gitHubLink}
              alt="link to project on GitHub"
              target="_blank"
            >
              GitHub
            </a>
            |
            <a
              href="https://www.figma.com/design/blwnnRP6dmL0oJVEss7cBV/ReCall-the-Midwife?node-id=0-1&t=7HGsJmfo14dZzPBq-1"
              className={styles.figmaLink}
              alt="link to figma draft"
              target="_blank"
            >
              Figma
            </a>
          </div>
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
          <div className={styles.links}>
            <a
              href="https://github.com/HoniNanoq2025/hejdi-kulturformidleren-opg.git"
              className={styles.gitHubLink}
              alt="link to project on GitHub"
              target="_blank"
            >
              GitHub
            </a>
            |
            <a
              href="https://www.figma.com/design/s3m3WocCufO1heu1nTnJ1w/Dame-Maggie-Smith?node-id=0-1&t=ApXb3Ojc0SDqmBXv-1"
              className={styles.figmaLink}
              alt="link to figma draft"
              target="_blank"
            >
              Figma
            </a>
          </div>
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
          <div className={styles.links}>
            <a
              href="https://github.com/HoniNanoq2025/SmartHome.git"
              className={styles.gitHubLink}
              alt="link to project on GitHub"
              target="_blank"
            >
              GitHub
            </a>
            |
            <a
              href="https://www.figma.com/design/8XZjlDYLZXmbTLqZ2lbpA4/SMART-HOME?node-id=0-1&t=XFcMiB2dmqJiPegG-1"
              className={styles.figmaLink}
              alt="link to figma draft"
              target="_blank"
            >
              Figma
            </a>
          </div>
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
          <div className={styles.links}>
            <a
              href={BogormenPDF}
              className={styles.gitHubLink}
              alt="link to project PDF"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
            |
            <a
              href="https://www.figma.com/design/FK7tP5MtDzC1cLvxGhGFA3/Bogormen---Webshop-opgave?node-id=0-1&t=FH0pToeMxw1REETv-1"
              className={styles.figmaLink}
              alt="link to figma draft"
              target="_blank"
            >
              Figma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

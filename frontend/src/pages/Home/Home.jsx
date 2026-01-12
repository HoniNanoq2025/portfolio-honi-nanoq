import { useNavigate, Link } from "react-router-dom";
import profilePic from "../../assets/img/profile-pic-02-400x400.png";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate(); // Hook til navigation

  const handleNavigateAbout = () => {
    navigate("/about");
  };

  const handleNavigateProjects = () => {
    navigate("/projects");
  };

  const handleNavigateResume = () => {
    navigate("/resume");
  };

  const handleNavigateContact = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.home}>
      {/* H1 header - font: Island Moments */}
      <div className={styles.header}>
        <h1>
          Welcome <br /> to
        </h1>
      </div>
      {/* H2 header - font: Irish Grover */}
      <div className={styles.subHeader}>
        <h2>
          THE PORTFOLIO AND RESUMÉ OF <br /> HONI
        </h2>
      </div>
      {/* Profile image - leads to About page */}
      <div className={styles.aboutContainer}>
        <Link to="/about">
          <img
            src={profilePic}
            alt="About Honi - link"
            width={250}
            className={styles.aboutImgLink}
          />
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          typeButton="button"
          onButtonClick={() => handleNavigateProjects}
          buttonText="MY PROJECTS"
          btnSize={styles.btnSize}
        />
        <Button
          typeButton="button"
          onButtonClick={() => handleNavigateResume}
          buttonText="RESUMÉ"
          btnSize={styles.btnSize}
        />
        <Button
          typeButton="button"
          onButtonClick={() => handleNavigateContact}
          buttonText="CONTACT"
          btnSize={styles.btnSize}
        />
      </div>
    </div>
  );
}

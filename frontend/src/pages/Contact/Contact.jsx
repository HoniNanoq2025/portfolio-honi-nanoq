import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const completed = localStorage.getItem("memoryGameCompleted") === "true";
    setIsUnlocked(completed);

    if (!completed) {
      setTimeout(() => {
        navigate("/game");
      }, 3000);
    }
  }, [navigate]);

  if (!isUnlocked) {
    return (
      <div className={styles.lockedWrapper}>
        <div className={styles.lockedContent}>
          <FaLock className={styles.lockIcon} />
          <h2>CONTACT FORM LOCKED!</h2>
          <p>Complete the memory game to unlock the contact form</p>
          <span>Redirecting to game...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1>Contact</h1>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.contactText}>
          If you wish to get in touch with me about a job, please send me your
          name, phone number and/or email address, plus the name of your
          company, and I will get back to you as soon as possible.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

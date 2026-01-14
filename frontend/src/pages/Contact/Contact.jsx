import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
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

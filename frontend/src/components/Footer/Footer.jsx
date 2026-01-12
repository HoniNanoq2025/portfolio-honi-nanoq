import { RxLinkedinLogo } from "react-icons/rx";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/hejdi-nielsen-2a1aa153"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxLinkedinLogo size={36} color="white" />
      </a>
      <p className={styles.footerText}>
        &copy; Copyright 2025 - Honi Nanoq&trade;
      </p>
    </footer>
  );
}

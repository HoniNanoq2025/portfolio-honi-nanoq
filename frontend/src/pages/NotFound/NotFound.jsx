import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.messageContainer}>
        <h1 className={styles.errorHeader}>
          404 — You’ve fallen through the wrong portal
        </h1>
        <p className={styles.errorText}>
          <strong>Status:</strong> <span>Reality mismatch</span>
        </p>
        <p className={styles.errorTxt}>This page exists in another universe</p>
        <Link to="/">Back to the main universe</Link>
      </div>
    </div>
  );
}

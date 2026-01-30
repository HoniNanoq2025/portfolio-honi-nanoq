import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div>
      <h1 className={styles.errorHeader}>404</h1>
      <p>Page not found</p>
      <Link to="/">Back to front page</Link>
    </div>
  );
}

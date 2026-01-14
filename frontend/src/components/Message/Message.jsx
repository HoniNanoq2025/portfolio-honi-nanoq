import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Message.module.css";

export default function Message() {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  return (
    <div className={styles.message}>
      <h1 className={styles.messageHeader}>Thank you</h1>
      <div className={styles.messageText}>
        <p>
          Thank you for reaching out.
          <br />I will get back to you in 1-2 business days (or at the requested
          date & time).
        </p>
      </div>
      <Button
        typeButton="button"
        onButtonClick={handleReturn}
        buttonText="BACK"
        btnSize={styles.btnSize}
      />
    </div>
  );
}

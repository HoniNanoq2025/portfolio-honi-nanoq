import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      type={props.typeButton || "button"}
      className={`${styles.button} ${props.btnSize || ""} ${props.className || ""}`}
      onClick={props.onButtonClick}
    >
      {props.icon && <span className={styles.icon}>{props.icon}</span>}
      {props.buttonText || props.children}
    </button>
  );
}

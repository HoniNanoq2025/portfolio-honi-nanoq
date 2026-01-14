import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Formular data sendt", data);
    toast.success("Tak for din besked!");
    navigate("/contact/thank-you");
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name..."
        className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        aria-invalid={errors.name ? "true" : "false"}
        type="text"
      />
      {errors.name && (
        <p role="alert" className={styles.errors}>
          {errors.name.message}
        </p>
      )}

      <input
        {...register("company")}
        type="text"
        placeholder="Company..."
        className={styles.input}
      />

      <input
        {...register("phone", {
          validate: (value) => {
            // Hvis feltet er tomt, accepter det
            if (!value || value.trim() === "") return true;
            // Fjerner alle mellemrum fra telefonnummeret, så valideringen fungerer uanset om brugeren skriver mellemrum eller ej.
            const cleaned = value.replace(/\s/g, "");

            // Danmark: +45 eller ingen landekode (8 cifre)
            if (/^(\+45)?[0-9]{8}$/.test(cleaned)) return true;

            // Grønland: +299 (6 cifre)
            if (/^\+299[0-9]{6}$/.test(cleaned)) return true;

            // Norge: +47 (8 cifre)
            if (/^\+47[0-9]{8}$/.test(cleaned)) return true;

            // Sverige: +46 (9-10 cifre)
            if (/^\+46[0-9]{9,10}$/.test(cleaned)) return true;

            return "Invalid phone number";
          },
        })}
        placeholder="Phone number..."
        className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
        aria-invalid={errors.phone ? "true" : "false"}
        type="tel"
      />
      {errors.phone && (
        <p role="alert" className={styles.errors}>
          {errors.phone.message}
        </p>
      )}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email",
          },
        })}
        type="email"
        placeholder="Email..."
        className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && (
        <p role="alert" className={styles.errors}>
          {errors.email.message}
        </p>
      )}

      <textarea
        {...register("message", { required: "Write a message" })}
        placeholder="Message..."
        name="message"
        id="message"
        className={`${styles.input} ${errors.message ? styles.inputError : ""}`}
        aria-invalid={errors.message ? "true" : "false"}
      />
      {errors.message && (
        <p role="alert" className={styles.errors}>
          {errors.message.message}
        </p>
      )}

      <Button typeButton="submit" buttonText="SEND" />
    </form>
  );
}

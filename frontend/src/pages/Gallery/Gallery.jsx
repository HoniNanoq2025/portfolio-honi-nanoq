import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import styles from "./Gallery.module.css";

/* Vite glob – statisk import af alle billeder */
const imageModules = import.meta.glob(
  "/src/assets/img/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export default function Gallery() {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("memoryGameCompleted") === "true";
    setIsUnlocked(completed);

    if (!completed) {
      setTimeout(() => {
        navigate("/game");
      }, 3000);
    }
  }, [navigate]);

  const galleryImages = useMemo(() => {
    return Object.entries(imageModules).map(([Path2D, mod], index) => {
      const filename = path.split("/").pop() ?? "";

      return {
        id: index,
        url: mod.default,
        query: filename.replace(/\.\w+$/, "").replace(/-/g, " "),
      };
    });
  }, []);

  if (!isUnlocked) {
    return (
      <div className={styles.lockedWrapper}>
        <div className={styles.lockedContent}>
          <FaLock className={styles.lockIcon} />
          <h2>Gallery Locked</h2>
          <p>Complete the memory game to unlock the gallery</p>
          <span>Redirecting to game...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryHeader}>
        <div className={styles.galleryTitle}>
          <FaSparkles />
          <h1>Gallery Unlocked!</h1>
          <FaSparkles />
        </div>
        <p>Congratulations on completing the memory game. Enjoy my gallery!</p>
      </div>

      <div className={styles.galleryGrid}>
        {galleryImages.map((image) => (
          <div key={image.id} className={styles.galleryCard}>
            <img
              src={image.url}
              alt={image.query}
              className={styles.galleryImage}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.galleryOverlay}>
              <p>{image.query}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

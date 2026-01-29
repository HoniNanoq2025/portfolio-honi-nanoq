import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import styles from "./Gallery.module.css";

/* Vite glob – statisk import af alle billeder */
const imageModules = import.meta.glob(
  "/src/assets/img/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export default function Gallery() {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const completed = localStorage.getItem("memoryGameCompleted") === "true";
    setIsUnlocked(completed);

    if (!completed) {
      setTimeout(() => {
        navigate("/game");
      }, 3000);
    }
  }, [navigate]);

  // Luk modal ved ESC-tast
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Forhindre scroll når modal er åben
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const galleryImages = useMemo(() => {
    return Object.entries(imageModules)
      .map(([path, mod], index) => {
        const filename = path.split("/").pop() ?? "";

        return {
          id: index,
          url: mod.default,
          query: filename.replace(/\.\w+$/, "").replace(/-/g, " "),
        };
      })
      .sort(() => Math.random() - 0.5);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (!isUnlocked) {
    return (
      <div className={styles.lockedWrapper}>
        <div className={styles.lockedContent}>
          <FaLock className={styles.lockIcon} />
          <h2>GALLERY LOCKED!</h2>
          <p>Complete the memory game to unlock the gallery</p>
          <span>Redirecting to game...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryTitle}>
            <h1>Gallery</h1>
          </div>
          <p>
            Congratulations on completing the memory game. Enjoy my gallery!
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={styles.galleryCard}
              onClick={() => handleImageClick(image)}
            >
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
      {/* Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <IoClose />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.query}
              className={styles.modalImage}
            />
            <div className={styles.modalCaption}>
              <p>{selectedImage.query}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

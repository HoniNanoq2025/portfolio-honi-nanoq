import { useState, useEffect } from "react";
import { FaTrophy, FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Game.module.css";

const emojis = ["🎮", "🎨", "🎭", "🎪"];

function createInitialCards() {
  const cards = [];
  emojis.forEach((emoji, index) => {
    cards.push({
      id: index * 2,
      emoji,
      isFlipped: false,
      isMatched: false,
    });
    cards.push({
      id: index * 2 + 1,
      emoji,
      isFlipped: false,
      isMatched: false,
    });
  });
  return cards.sort(() => Math.random() - 0.5);
}

export default function Game() {
  const [cards, setCards] = useState(createInitialCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true }
                : card,
            ),
          );
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card,
            ),
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    const allMatched =
      cards.length > 0 && cards.every((card) => card.isMatched);
    if (allMatched && !isGameComplete) {
      setIsGameComplete(true);
      setShowModal(true);
      localStorage.setItem("memoryGameCompleted", "true");
    }
  }, [cards, isGameComplete]);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2) return;

    const card = cards.find((c) => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards((prevCards) =>
      prevCards.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)),
    );
    setFlippedCards((prev) => [...prev, id]);
  };

  const resetGame = () => {
    setCards(createInitialCards());
    setFlippedCards([]);
    setMoves(0);
    setIsGameComplete(false);
    setShowModal(false);
  };

  const goToGallery = () => {
    navigate("/gallery");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameHeader}>
        <h1>Memory Game</h1>
        <p className={styles.gameParagraph}>
          Match all pairs to unlock the gallery!
        </p>
        <div className={styles.moves}>Moves: {moves}</div>
      </div>

      <div className={styles.gameGridWrapper}>
        <div className={styles.gameGrid}>
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || card.isFlipped}
              className={`${styles.card} ${card.isFlipped || card.isMatched ? styles.cardFlipped : styles.cardHidden} ${card.isMatched ? styles.cardMatched : ""}`}
            >
              <span className={styles.emoji}>
                {card.isFlipped || card.isMatched ? card.emoji : "?"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          onButtonClick={resetGame}
          icon={<FaRedo />}
          buttonText="RESET GAME"
          className={styles.resetButton}
        />
      </div>

      {showModal && (
        <div className={styles.gameOverlay}>
          <div className={styles.modal}>
            <FaTrophy />
            <h2>Congratulations!</h2>
            <p className={styles.gameParagraph}>
              You completed the game in {moves} moves!
            </p>
            <p className={styles.gameParagraph}>
              🎉 Gallery has been unlocked! 🎉
            </p>
            <div className={styles.modalActions}>
              <Button onButtonClick={goToGallery} buttonText="VIEW GALLERY" />
              <Button onButtonClick={closeModal} buttonText="CLOSE" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

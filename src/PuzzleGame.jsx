import { useState, useEffect } from 'react';
import './PuzzleGame.css';

const PuzzleGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const symbols = ['🐵', '🍈', '🥥', '🌍', '✨', '☢️', '😶‍🌫️', '🧀'];
    const shuffledCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({ id: index, symbol }));
    
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  // Check for match
  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      setMoves(prev => prev + 1);
      
      if (cards[first].symbol === cards[second].symbol) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  }, [flipped, cards, matched]);

  // Check for win
  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length && matched.length > 0) {
      setGameWon(true);
    }
  }, [matched, cards.length]);

  const handleCardClick = (index) => {
    if (flipped.includes(index) || matched.includes(index) || flipped.length === 2) {
      return;
    }
    setFlipped([...flipped, index]);
  };

  return (
    <div className="puzzle-game-container">
      <div className="game-header">
        <h1>Memory Matching Game</h1>
        <div className="game-stats">
          <div className="stat">
            <span className="stat-label">Moves:</span>
            <span className="stat-value">{moves}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Matched:</span>
            <span className="stat-value">{matched.length / 2} / {cards.length / 2}</span>
          </div>
        </div>
      </div>

      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.symbol}</div>
            </div>
          </div>
        ))}
      </div>

      {gameWon && (
        <div className="win-screen">
          <div className="win-content">
            <h2>🎉 You Won! 🎉</h2>
            <p>Completed in {moves} moves!</p>
            <button onClick={initializeGame} className="reset-button">Play Again</button>
          </div>
        </div>
      )}

      <button onClick={initializeGame} className="new-game-button">New Game</button>
    </div>
  );
};

export default PuzzleGame;

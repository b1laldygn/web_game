# Memory Matching Game Website 🎮

A modern, interactive puzzle game website built with React and Vite. Players test their memory by matching pairs of cards with different symbols.

## Features ✨

- **Memory Matching Gameplay**: Flip cards to find matching pairs
- **Score Tracking**: Keep track of moves and matched pairs
- **Win Condition**: Complete the game by matching all pairs
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Beautiful UI**: Modern gradient design with smooth animations
- **Interactive Feedback**: Hover effects, card flip animations, and visual feedback

## Game Rules 🎯

1. Click on cards to reveal symbols
2. Try to find matching pairs
3. Match all pairs to win
4. The game tracks your moves - try to complete it in as few moves as possible
5. Click "New Game" to play again

## Tech Stack 🛠️

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **JavaScript** - Game logic
- **CSS3** - Styling with animations and gradients

## Getting Started 🚀

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The game will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## Project Structure 📁

```
src/
├── App.jsx          # Main app component
├── App.css          # App styling
├── PuzzleGame.jsx   # Game logic and UI
├── PuzzleGame.css   # Game styling
├── index.css        # Global styles
└── main.jsx         # Entry point
```

## Game Components 🎲

- **8 Card Pairs** with emoji symbols (🎮, 🎯, 🎲, 🎪, 🎨, 🎭, 🎬, 🎤)
- **4x4 Grid Layout** on desktop, responsive grid on mobile
- **Move Counter** to track efficiency
- **Matched Pair Counter** showing progress
- **Win Screen** with move count and play again option

## How to Play 🕹️

1. The game starts with 16 cards face-down (showing "?")
2. Click any card to reveal its symbol
3. Click a second card - if symbols match, both cards stay flipped
4. If they don't match, both cards flip back after 1 second
5. Complete all matches to win!
6. Use "New Game" button to restart anytime

## Browser Support 🌐

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements 🔮

- Difficulty levels with different grid sizes
- Leaderboard and high scores
- Sound effects and music
- Time-based challenges
- Multiplayer mode
- Different themes and card designs

## License 📄

MIT License - Feel free to use and modify!

---

**Enjoy the game! 🎉**

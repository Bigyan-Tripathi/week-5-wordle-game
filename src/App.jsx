// Layer 5 - the conductor: picks the answer, uses the hook,
// listens to the physical keyboard and renders the screen.
import { useState, useEffect } from 'react';
import { getRandomWord } from './data/words';
import useWordle from './hooks/useWordle';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Face from './components/Face';
import './App.css';

// More green letters in the last guess = happier face.
function getMood(greens) {
  if (greens >= 5) return 'best';
  if (greens >= 3) return 'better';
  if (greens >= 1) return 'good';
  return 'sad';
}

export default function App() {
  const [answer] = useState(() => getRandomWord());
  const [pressedKey, setPressedKey] = useState(''); // key lit up on screen
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup } =
    useWordle(answer);

  const isGameOver = isCorrect || turn >= 6;

  // Look at the last guess the player submitted, if there is one.
  const lastGuess = guesses[turn - 1];
  const greens = lastGuess
    ? lastGuess.filter((tile) => tile.status === 'correct').length
    : 0;

  // Side effect: attach a browser keydown listener (with cleanup).
  useEffect(() => {
    if (isGameOver) return; // stop input once finished
    const onKeyDown = (e) => {
      handleKeyup(e.key);
      setPressedKey(e.key); // remember it so the on-screen key can react
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKeyup, isGameOver]);

  // After a moment, clear the highlight.
  useEffect(() => {
    if (!pressedKey) return;
    const timer = setTimeout(() => setPressedKey(''), 130);
    return () => clearTimeout(timer);
  }, [pressedKey]);

  return (
    <div className="app">
      <header className="app-header">
        <span className="kicker">week 5</span>
        <h1>Wordle</h1>
        <p className="tagline">Six tries &middot; five letters &middot; one word</p>
      </header>

      <main className="game">
        {/* Face slot keeps its height so the board does not jump. */}
        <div className="face-slot">
          {turn > 0 && <Face mood={getMood(greens)} />}
        </div>

        <Board guesses={guesses} currentGuess={currentGuess} turn={turn} />

        {isGameOver && (
          <div className={`message ${isCorrect ? 'win' : 'lose'}`}>
            <span className="message-label">
              {isCorrect ? 'solved' : 'no luck'}
            </span>
            <p>
              {isCorrect
                ? 'Nice — you cracked it.'
                : `Out of tries. The word was "${answer.toUpperCase()}".`}
            </p>
            <button className="play-again" onClick={() => window.location.reload()}>
              Play Again
            </button>
          </div>
        )}

        <Keyboard
          usedKeys={usedKeys}
          onKeyPress={handleKeyup}
          pressedKey={pressedKey}
        />
      </main>

      <footer className="legend">
        <span><i className="dot correct" /> right spot</span>
        <span><i className="dot present" /> wrong spot</span>
        <span><i className="dot absent" /> not in word</span>
      </footer>
    </div>
  );
}

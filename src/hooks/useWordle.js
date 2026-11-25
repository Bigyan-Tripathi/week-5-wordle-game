// Layer 3 - State: all of the game's memory and rules live here.
import { useState } from 'react';
import { checkGuess } from '../utils/checkGuess';

const MAX_TURNS = 6;
const WORD_LENGTH = 5;
// Used so a keyboard key can only be upgraded (grey -> yellow -> green).
const RANK = { absent: 1, present: 2, correct: 3 };

export default function useWordle(answer) {
  const [turn, setTurn] = useState(0); // which row (0-5)
  const [currentGuess, setCurrentGuess] = useState(''); // what is being typed
  const [guesses, setGuesses] = useState(Array(MAX_TURNS).fill(null)); // graded rows
  const [isCorrect, setIsCorrect] = useState(false); // did we win?
  const [usedKeys, setUsedKeys] = useState({}); // keyboard colours

  const isGameOver = isCorrect || turn >= MAX_TURNS;

  const addLetter = (letter) => {
    setCurrentGuess((prev) =>
      prev.length < WORD_LENGTH ? prev + letter.toLowerCase() : prev
    );
  };

  const deleteLetter = () => {
    setCurrentGuess((prev) => prev.slice(0, -1));
  };

  const submitGuess = () => {
    if (isGameOver) return;
    if (currentGuess.length !== WORD_LENGTH) return;

    const formattedGuess = checkGuess(currentGuess, answer);

    // Never mutate state directly: copy the array, change the copy.
    setGuesses((prev) => {
      const newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setUsedKeys((prev) => {
      const newKeys = { ...prev };
      formattedGuess.forEach(({ letter, status }) => {
        const current = newKeys[letter];
        if (!current || RANK[status] > RANK[current]) {
          newKeys[letter] = status;
        }
      });
      return newKeys;
    });

    if (currentGuess === answer) setIsCorrect(true);
    setTurn((prev) => prev + 1);
    setCurrentGuess('');
  };

  // One input function for both the physical and the on-screen keyboard.
  const handleKeyup = (key) => {
    if (key === 'Enter') submitGuess();
    else if (key === 'Backspace') deleteLetter();
    else if (/^[a-zA-Z]$/.test(key)) addLetter(key);
  };

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
}

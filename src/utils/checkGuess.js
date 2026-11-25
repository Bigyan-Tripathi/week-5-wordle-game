// Layer 2 - Logic: gives every letter 'correct' (green), 'present' (yellow)
// or 'absent' (grey). Plain JavaScript, no React.
export function checkGuess(guess, answer) {
  const guessLetters = guess.split('');
  const answerLetters = answer.split('');
  const result = guessLetters.map((letter) => ({ letter, status: 'absent' }));

  // Count each letter in the answer, e.g. "apple" -> { a: 1, p: 2, l: 1, e: 1 }
  const letterCounts = {};
  for (const letter of answerLetters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  // Pass 1 - greens: right letter, right position
  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i].status = 'correct';
      letterCounts[guessLetters[i]]--; // this letter is now "used up"
    }
  }

  // Pass 2 - yellows: right letter, wrong position (only if any are left)
  for (let i = 0; i < guessLetters.length; i++) {
    if (result[i].status === 'correct') continue; // already handled
    const letter = guessLetters[i];
    if (letterCounts[letter] > 0) {
      result[i].status = 'present';
      letterCounts[letter]--; // claim one
    }
  }

  return result;
}

# Week 5 Wordle Game

A Wordle clone built with React and Vite. Paper-and-ink theme, ASCII reaction faces.

**Author:** Bigyan Tripathi


## How to play

- Type a five-letter word and press `Enter` to submit it.
- Green = right letter, right spot. Yellow = right letter, wrong spot. Grey = not in the word.
- You have six tries. The face above the board reacts to your guess.

## Structure

- `src/data/words.js` - word list and random answer picker
- `src/utils/checkGuess.js` - green / yellow / grey algorithm (two passes)
- `src/hooks/useWordle.js` - game state and rules
- `src/components/` - Tile, Row, Board, Keyboard, Face
- `src/App.jsx` - ties everything together
- `src/App.css` - all the styling (theme, tiles, keys, animations)
- `src/index.css` - page background and font

## Moods

The face above the board reacts to the green letters in your last guess:
0 = sad, 1-2 = good, 3-4 = better, 5 = best.

# Week 5 Wordle Game

A Wordle clone built with React and Vite. Paper-and-ink theme, ASCII reaction faces.

**Author:** Bigyan Tripathi

## How to run the game

1. Open a terminal in the project folder:
   ```bash
   cd wordle-react
   ```
2. Install the dependencies (only needed the first time):
   ```bash
   npm install
   ```
3. Start the game:
   ```bash
   npm run dev
   ```
4. Open the link shown in the terminal, usually:
   ```
   http://localhost:5173/
   ```
5. To stop the game, press `Ctrl + C` in the terminal.

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

import Row from './Row';

// The 6 x 5 grid. Decides which state each row is in.
export default function Board({ guesses, currentGuess, turn }) {
  return (
    <div className="board">
      {guesses.map((guess, index) => {
        const isCurrentRow = index === turn;
        return (
          <Row
            key={index}
            guess={guess} // past result or null
            currentGuess={isCurrentRow ? currentGuess : null} // live text, active row only
          />
        );
      })}
    </div>
  );
}

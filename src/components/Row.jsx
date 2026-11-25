import Tile from './Tile';

// One horizontal line of 5 tiles. Three possible states:
// a submitted guess, the row being typed, or an empty future row.
export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row">
        {guess.map((tile, i) => (
          <Tile key={i} letter={tile.letter} status={tile.status} />
        ))}
      </div>
    );
  }

  if (currentGuess !== null) {
    const letters = currentGuess.split('');
    return (
      <div className="row">
        {Array.from({ length: 5 }).map((_, i) => (
          <Tile key={i} letter={letters[i] || ''} />
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Tile key={i} letter="" />
      ))}
    </div>
  );
}

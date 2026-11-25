const ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

// On-screen keyboard. Clicking a key calls the same handler as the real keyboard.
// `pressedKey` lights up the matching key while a physical key is down.
export default function Keyboard({ usedKeys, onKeyPress, pressedKey }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((key) => {
            // Enter and Backspace are wider than the letter keys.
            const isWide = key === 'Enter' || key === 'Backspace';
            const isPressed = key.toLowerCase() === (pressedKey || '').toLowerCase();
            const className = `key ${isWide ? 'wide' : ''} ${
              usedKeys[key] || ''
            } ${isPressed ? 'pressed' : ''}`.trim();
            return (
              <button
                key={key}
                className={className}
                onClick={() => onKeyPress(key)}
              >
                {key === 'Backspace' ? '⌫' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// A tiny ASCII face. Two frames each, so CSS can blink it.
const FACES = {
  sad: ['( T_T )', '( T-T )'],
  good: ['( o_o )', '( -_- )'],
  better: ['( ^_^ )', '( ^-^ )'],
  best: ['\\(^o^)/', '\\(^O^)/'],
};

const LABELS = {
  sad: 'sad',
  good: 'good',
  better: 'better',
  best: 'best',
};

// `mood` is one of: sad, good, better, best.
export default function Face({ mood }) {
  const frames = FACES[mood];

  return (
    <div className={`face ${mood}`} aria-hidden="true">
      <pre className="face-frame">{frames[0]}</pre>
      <pre className="face-frame">{frames[1]}</pre>
      <span className="face-label">{LABELS[mood]}</span>
    </div>
  );
}

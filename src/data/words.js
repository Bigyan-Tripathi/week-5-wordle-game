// Layer 1 - Data: the word list and a helper that picks a random answer.
export const WORDS = [
  'apple', 'brave', 'crane', 'water', 'zebra', 'house', 'plant', 'light',
  'bread', 'chair', 'dream', 'earth', 'flame', 'grape', 'heart', 'image',
  'juice', 'knife', 'lemon', 'music', 'night', 'ocean', 'paper', 'queen',
  'river', 'stone', 'tiger', 'uncle', 'voice', 'whale', 'youth', 'angel',
  'beach', 'cloud', 'dance', 'eagle', 'field', 'ghost', 'happy', 'ivory',
  'jelly', 'kings', 'laugh', 'magic', 'novel', 'olive', 'pearl', 'quiet',
  'robot', 'smile', 'table', 'union', 'vivid', 'woman', 'xerox', 'yacht',
  'zesty', 'bring', 'clock', 'drive'
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}

export interface CardType { num: number, mark: string }
export type mark_type = 'spade' | 'heart' | 'diamond' | 'club';
export const translateNum: { [num: number]: string } = {
  0: '',
  1: 'A',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K',
};

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const playing_cards_data = (() => {
  const cards:Array<CardType> = [];
  for (let i = 1; i <= 13; i++) {
    for (const m of ['spade', 'heart', 'diamond', 'club']) {
      cards.push({
        num: i,
        mark: m,
      });
    }
  }
  cards.push({
    num: 0,
    mark: 'joker',
  });
  return shuffle(cards);
})();

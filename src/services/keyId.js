

export const keyId = generateKeyIds([
  'DIGIT1',
  'DIGIT2',
  'DIGIT3',
  'DIGIT4',
  'DIGIT5',
  'DIGIT6',
  'DIGIT7',
  'DIGIT8',
  'DIGIT9',
  'DIGIT0',
  'MINUS',
  'EQUAL'
]);

function generateKeyIds(labels) {
  return labels.reduce((map, label) => {
    map[label] = label;
    return map;
  }, {});
}

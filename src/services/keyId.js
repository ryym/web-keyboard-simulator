

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
  'EQUAL',
  'INTL_YEN',
  'KEY_Q',
  'KEY_W',
  'KEY_E',
  'KEY_R',
  'KEY_T',
  'KEY_Y',
  'KEY_U',
  'KEY_I',
  'KEY_O',
  'KEY_P',
  'BRACKET_LEFT',
  'BRACKET_RIGHT',
  'KEY_A',
  'KEY_S',
  'KEY_D',
  'KEY_F',
  'KEY_G',
  'KEY_H',
  'KEY_J',
  'KEY_K',
  'KEY_L',
  'SEMICOLON',
  'QUOTE',
  'KEY_Z',
  'KEY_X',
  'KEY_C',
  'KEY_V',
  'KEY_B',
  'KEY_N',
  'KEY_M',
  'COMMA',
  'PERIOD',
  'SLASH'
]);

function generateKeyIds(labels) {
  return labels.reduce((map, label) => {
    map[label] = label;
    return map;
  }, {});
}

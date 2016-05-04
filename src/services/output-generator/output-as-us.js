import { keyId } from '../keyId';

export default function outputAsUS(keyId, { shiftKey }) {
  const key = String(keyId);

  if (! characterMap.hasOwnProperty(key)) {
    return '';
  }

  const [normal, withShift] = characterMap[key];
  return shiftKey ? withShift : normal;
}

const characterMap = {
  [keyId.DIGIT1]: ['1', '!'],
  [keyId.DIGIT2]: ['2', '@'],
  [keyId.DIGIT3]: ['3', '#'],
  [keyId.DIGIT4]: ['4', '$'],
  [keyId.DIGIT5]: ['5', '%'],
  [keyId.DIGIT6]: ['6', '^'],
  [keyId.DIGIT7]: ['7', '&'],
  [keyId.DIGIT8]: ['8', '*'],
  [keyId.DIGIT9]: ['9', '('],
  [keyId.DIGIT0]: ['0', ')'],
  [keyId.MINUS]: ['-', '_'],
  [keyId.EQUAL]: ['=', '+'],
  [keyId.INTL_YEN]: ['\\', '|'],
  [keyId.KEY_Q]: ['q', 'Q'],
  [keyId.KEY_W]: ['w', 'W'],
  [keyId.KEY_E]: ['e', 'E'],
  [keyId.KEY_R]: ['r', 'R'],
  [keyId.KEY_T]: ['t', 'T'],
  [keyId.KEY_Y]: ['y', 'Y'],
  [keyId.KEY_U]: ['u', 'U'],
  [keyId.KEY_I]: ['i', 'I'],
  [keyId.KEY_O]: ['o', 'O'],
  [keyId.KEY_P]: ['p', 'P'],
  [keyId.BRACKET_LEFT]: ['[', '{'],
  [keyId.BRACKET_RIGHT]: [']', '}'],
  [keyId.KEY_A]: ['a', 'A'],
  [keyId.KEY_S]: ['s', 'S'],
  [keyId.KEY_D]: ['d', 'D'],
  [keyId.KEY_F]: ['f', 'F'],
  [keyId.KEY_G]: ['g', 'G'],
  [keyId.KEY_H]: ['h', 'H'],
  [keyId.KEY_J]: ['j', 'J'],
  [keyId.KEY_K]: ['k', 'K'],
  [keyId.KEY_L]: ['l', 'L'],
  [keyId.SEMICOLON]: [';', ':'],
  [keyId.QUOTE]: ['\'', '"'],
  [keyId.KEY_Z]: ['z', 'Z'],
  [keyId.KEY_X]: ['x', 'X'],
  [keyId.KEY_C]: ['c', 'C'],
  [keyId.KEY_V]: ['v', 'V'],
  [keyId.KEY_B]: ['b', 'B'],
  [keyId.KEY_N]: ['n', 'N'],
  [keyId.KEY_M]: ['m', 'M'],
  [keyId.COMMA]: [',', '<'],
  [keyId.PERIOD]: ['.', '>'],
  [keyId.SLASH]: ['/', '?']
};

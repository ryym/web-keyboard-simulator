import { keyId } from '$services/keyId';

export default function outputAsDvorak(keyId, { shiftKey }) {
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
  [keyId.MINUS]: ['[', '{'],
  [keyId.EQUAL]: [']', '}'],
  [keyId.KEY_Q]: ['\'', '"'],
  [keyId.KEY_W]: [',', '<'],
  [keyId.KEY_E]: ['.', '>'],
  [keyId.KEY_R]: ['p', 'P'],
  [keyId.KEY_T]: ['y', 'Y'],
  [keyId.KEY_Y]: ['f', 'F'],
  [keyId.KEY_U]: ['g', 'G'],
  [keyId.KEY_I]: ['c', 'C'],
  [keyId.KEY_O]: ['r', 'R'],
  [keyId.KEY_P]: ['l', 'L'],
  [keyId.BRACKET_LEFT]: ['/', '{'],
  [keyId.BRACKET_RIGHT]: ['=', '}'],
  [keyId.KEY_A]: ['a', 'A'],
  [keyId.KEY_S]: ['o', 'O'],
  [keyId.KEY_D]: ['e', 'E'],
  [keyId.KEY_F]: ['u', 'U'],
  [keyId.KEY_G]: ['i', 'I'],
  [keyId.KEY_H]: ['d', 'D'],
  [keyId.KEY_J]: ['h', 'H'],
  [keyId.KEY_K]: ['t', 'T'],
  [keyId.KEY_L]: ['n', 'N'],
  [keyId.SEMICOLON]: ['s', 'S'],
  [keyId.QUOTE]: ['-', '_'],
  [keyId.KEY_Z]: [':', ';'],
  [keyId.KEY_X]: ['q', 'Q'],
  [keyId.KEY_C]: ['j', 'J'],
  [keyId.KEY_V]: ['k', 'K'],
  [keyId.KEY_B]: ['x', 'X'],
  [keyId.KEY_N]: ['b', 'B'],
  [keyId.KEY_M]: ['m', 'M'],
  [keyId.COMMA]: ['w', 'W'],
  [keyId.PERIOD]: ['v', 'V'],
  [keyId.SLASH]: ['z', 'Z']
};


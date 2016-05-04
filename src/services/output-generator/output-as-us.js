import { keyId } from '../keyId';

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
  [keyId.EQUAL]: ['=', '+']
};

export default function outputAsUS(keyId, { shiftKey }) {
  const key = String(keyId);

  if (! characterMap.hasOwnProperty(key)) {
    return '';
  }

  const chars = characterMap[key];
  return shiftKey ? chars[1] : chars[0];
}

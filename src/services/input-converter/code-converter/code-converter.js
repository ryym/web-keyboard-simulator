import { keyId } from '../../keyId';
import { makeFunctionFromMap } from '../util';

// KeyboardEvent.codeの値はキーボードのレイアウトに関係なく一定

const convertInput = makeFunctionFromMap({
  Digit1: keyId.DIGIT1,
  Digit2: keyId.DIGIT2,
  Digit3: keyId.DIGIT3,
  Digit4: keyId.DIGIT4,
  Digit5: keyId.DIGIT5,
  Digit6: keyId.DIGIT6,
  Digit7: keyId.DIGIT7,
  Digit8: keyId.DIGIT8,
  Digit9: keyId.DIGIT9,
  Digit0: keyId.DIGIT0,
  Minus: keyId.MINUS,
  Equal: keyId.EQUAL
});

export default convertInput;

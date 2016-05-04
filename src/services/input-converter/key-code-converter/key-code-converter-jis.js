import { keyId } from '../../keyId';
import { makeFunctionFromMap } from '../util';

export default function makeConverterForJIS() {
  return makeFunctionFromMap({
    49: keyId.DIGIT1,
    33: keyId.DIGIT1,
    50: keyId.DIGIT2,
    34: keyId.DIGIT2
  });
}

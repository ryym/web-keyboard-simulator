import { keyId } from '$services/keyId';
import { makeFunctionFromMap } from '$services/input-converter/util';

export default function makeConverterForJIS() {
  return makeFunctionFromMap({
    49: keyId.DIGIT1,
    33: keyId.DIGIT1,
    50: keyId.DIGIT2,
    34: keyId.DIGIT2
  });
}

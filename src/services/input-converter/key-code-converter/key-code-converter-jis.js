import { keyPos } from '$services/keyPos';
import { makeFunctionFromMap } from '$services/input-converter/util';

export default function makeConverterForJIS() {
  return makeFunctionFromMap({
    49: keyPos.DIGIT1,
    33: keyPos.DIGIT1,
    50: keyPos.DIGIT2,
    34: keyPos.DIGIT2
  });
}

import { keyPos } from '$services/keyPos';
import { makeFunctionFromMap } from '$services/key-pos-detector/util';

export default function makeDetectorForJIS() {
  return makeFunctionFromMap({
    49: keyPos.DIGIT1,
    33: keyPos.DIGIT1,
    50: keyPos.DIGIT2,
    34: keyPos.DIGIT2
  });
}

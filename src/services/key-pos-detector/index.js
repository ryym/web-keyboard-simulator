import { makeKeyPosDetectorFromCode } from './code-detector';
import { makeKeyPosDetectorFromKeyCode } from './key-code-detector';
import log from '$services/log';

export const makeKeyPosDetector = ({ keyboardEvent }) => (keyboardType) => {
  if (keyboardEvent === undefined) {
    return;
  }

  const detectorOptions = {  keyboardType };

  if (keyboardEvent.code !== undefined) {
    log.debug('Use code detector');
    return makeKeyPosDetectorFromCode(detectorOptions);
  }

  if (keyboardEvent.keyCode !== undefined) {
    log.debug('Use keyCode detector');
    return makeKeyPosDetectorFromKeyCode(detectorOptions);
  }
}

import detectFromCode from './code-detector';

export function makeKeyPosDetectorFromCode() {
  return (event) => detectFromCode(event.code);
}

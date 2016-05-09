import { keyPos } from '$services/keyPos';
import { makeFunctionFromMap } from '$services/key-pos-detector/util';

const detectFromCode = makeFunctionFromMap({
  Digit1: keyPos.DIGIT1,
  Digit2: keyPos.DIGIT2,
  Digit3: keyPos.DIGIT3,
  Digit4: keyPos.DIGIT4,
  Digit5: keyPos.DIGIT5,
  Digit6: keyPos.DIGIT6,
  Digit7: keyPos.DIGIT7,
  Digit8: keyPos.DIGIT8,
  Digit9: keyPos.DIGIT9,
  Digit0: keyPos.DIGIT0,
  Minus: keyPos.MINUS,
  Equal: keyPos.EQUAL,
  IntlYen: keyPos.INTL_YEN,
  KeyQ: keyPos.KEY_Q,
  KeyW: keyPos.KEY_W,
  KeyE: keyPos.KEY_E,
  KeyR: keyPos.KEY_R,
  KeyT: keyPos.KEY_T,
  KeyY: keyPos.KEY_Y,
  KeyU: keyPos.KEY_U,
  KeyI: keyPos.KEY_I,
  KeyO: keyPos.KEY_O,
  KeyP: keyPos.KEY_P,
  BracketLeft: keyPos.BRACKET_LEFT,
  BracketRight: keyPos.BRACKET_RIGHT,
  KeyA: keyPos.KEY_A,
  KeyS: keyPos.KEY_S,
  KeyD: keyPos.KEY_D,
  KeyF: keyPos.KEY_F,
  KeyG: keyPos.KEY_G,
  KeyH: keyPos.KEY_H,
  KeyJ: keyPos.KEY_J,
  KeyK: keyPos.KEY_K,
  KeyL: keyPos.KEY_L,
  Semicolon: keyPos.SEMICOLON,
  Quote: keyPos.QUOTE,
  KeyZ: keyPos.KEY_Z,
  KeyX: keyPos.KEY_X,
  KeyC: keyPos.KEY_C,
  KeyV: keyPos.KEY_V,
  KeyB: keyPos.KEY_B,
  KeyN: keyPos.KEY_N,
  KeyM: keyPos.KEY_M,
  Comma: keyPos.COMMA,
  Period: keyPos.PERIOD,
  Slash: keyPos.SLASH
});

export default detectFromCode;
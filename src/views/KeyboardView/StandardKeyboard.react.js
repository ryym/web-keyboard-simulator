import React from 'react';
import { keyPos } from '$services/keyPos';

export default class StandardKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this._keyLayout = this.defineKeyLayout();
  }

  render() {
    return (
      <div>
        {this.props.renderKeyboard(this._keyLayout)}
      </div>
    );
  }

  defineKeyLayout() {
    return [
      {
        rowClass: 'function-keys',
        keys: [
          keyPos.ESCAPE,
          keyPos.F1,
          keyPos.F2,
          keyPos.F3,
          keyPos.F4,
          keyPos.F5,
          keyPos.F6,
          keyPos.F7,
          keyPos.F8,
          keyPos.F9,
          keyPos.F10,
          keyPos.F11,
          keyPos.F12,
          keyPos.POWER
        ]
      },
      {
        keys: [
          keyPos.BACKQUOTE,
          keyPos.DIGIT1,
          keyPos.DIGIT2,
          keyPos.DIGIT3,
          keyPos.DIGIT4,
          keyPos.DIGIT5,
          keyPos.DIGIT6,
          keyPos.DIGIT7,
          keyPos.DIGIT8,
          keyPos.DIGIT9,
          keyPos.DIGIT0,
          keyPos.MINUS,
          keyPos.EQUAL,
          keyPos.BACKSPACE
        ]
      },
      {
        keys: [
          keyPos.TAB,
          keyPos.KEY_Q,
          keyPos.KEY_W,
          keyPos.KEY_E,
          keyPos.KEY_R,
          keyPos.KEY_T,
          keyPos.KEY_Y,
          keyPos.KEY_U,
          keyPos.KEY_I,
          keyPos.KEY_O,
          keyPos.KEY_P,
          keyPos.BRACKET_LEFT,
          keyPos.BRACKET_RIGHT,
          keyPos.INTL_YEN
        ]
      },
      {
        keys: [
          keyPos.CONTROL_LEFT,
          keyPos.KEY_A,
          keyPos.KEY_S,
          keyPos.KEY_D,
          keyPos.KEY_F,
          keyPos.KEY_G,
          keyPos.KEY_H,
          keyPos.KEY_J,
          keyPos.KEY_K,
          keyPos.KEY_L,
          keyPos.SEMICOLON,
          keyPos.QUOTE,
          keyPos.ENTER
        ]
      },
      {
        keys: [
          keyPos.SHIFT_LEFT,
          keyPos.KEY_Z,
          keyPos.KEY_X,
          keyPos.KEY_C,
          keyPos.KEY_V,
          keyPos.KEY_B,
          keyPos.KEY_N,
          keyPos.KEY_M,
          keyPos.COMMA,
          keyPos.PERIOD,
          keyPos.SLASH,
          keyPos.SHIFT_RIGHT
        ]
      },
      {
        rowClass: 'bottom',
        keys: [
          keyPos.CAPS_LOCK,
          keyPos.ALT_LEFT,
          keyPos.OS_LEFT,
          keyPos.SPACE,
          keyPos.OS_RIGHT,
          keyPos.ALT_RIGHT,
          keyPos.FUNCTION
        ]
      }
    ];
  }
}


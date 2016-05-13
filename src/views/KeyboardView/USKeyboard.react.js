import React from 'react';
import { keyPos } from '$services/keyPos';

export default class USKeyboard extends React.Component {
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
      [
        keyPos.ESCAPE,
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
        keyPos.INTL_YEN,
        keyPos.BACKQUOTE
      ],
      [
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
        keyPos.BACKSPACE
      ],
      [
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
        keyPos.KEY_P,
        keyPos.SEMICOLON,
        keyPos.QUOTE,
        keyPos.ENTER
      ],
      [
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
    ];
  }
}

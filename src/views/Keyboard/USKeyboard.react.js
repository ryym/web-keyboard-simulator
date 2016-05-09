import React from 'react';
import Key from './Key';
import { keyPos } from '$services/keyPos';

export default class USKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this._keyLayout = this._defineKeyLayout();
  }

  render() {
    return (
      <div className="keyboard">
        <div className="keyboard_frame">
          {this.renderKeyboard(this._keyLayout)}
        </div>
      </div>
    );
  }

  renderKeyboard(keyRows) {
    return keyRows.map((keys, i) => (
      <div key={`us-${i}`} className="keyboard_row">
        {this.renderRow(keys)}
      </div>
    ));
  }

  renderRow(keys) {
    const { props } = this;
    return keys.map(posID => {
      const key = props.keyMap[posID];
      const pressed = props.pressedKeys.hasOwnProperty(posID);
      return (
        <Key
          key={posID}
          labels={key.getLabels()}
          size={key.getSize()}
          pressed={pressed}
        />
      );
    });
  }

  _defineKeyLayout() {
    return [
      [
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
        keyPos.EQUAL
      ],
      [
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
        keyPos.BRACKET_RIGHT
      ],
      [
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
        keyPos.QUOTE
      ],
      [
        keyPos.KEY_Z,
        keyPos.KEY_X,
        keyPos.KEY_C,
        keyPos.KEY_V,
        keyPos.KEY_B,
        keyPos.KEY_N,
        keyPos.KEY_M,
        keyPos.COMMA,
        keyPos.PERIOD,
        keyPos.SLASH
      ]
    ];
  }
}

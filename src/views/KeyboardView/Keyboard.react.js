import React from 'react';
import Key from './Key';
import StandardKeyboard from './StandardKeyboard';
import qwertyKeyMap from '$services/key-maps/key-map-qwerty';
import dvorakKeyMap from '$services/key-maps/key-map-dvorak';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this.renderKeyboard = this.renderKeyboard.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    const { keyboardType } = this.props;
    const SelectedKeyboard = this.selectLayout(keyboardType);
    this._keyMap = this.selectKeyMap(keyboardType);
    return (
      <div className="keyboard">
        <div className="keyboard_frame">
          <SelectedKeyboard renderKeyboard={this.renderKeyboard} />
        </div>
        <div className="keyboard_footer">
          <div className="keyboard-name">{keyboardType}</div>
        </div>
      </div>
    );
  }

  selectKeyMap(type) {
    switch (type) {
    case 'QWERTY':
      return qwertyKeyMap;
    case 'DVORAK':
      return dvorakKeyMap;
    }
  }

  selectLayout(type) {
    switch (type) {
    case 'QWERTY':
    case 'DVORAK':
      return StandardKeyboard;
    }
  }

  renderKeyboard(keyRows) {
    return keyRows.map(({ rowClass, keys }, i) => {
      const additionalRowClass = rowClass ? `keyboard_row-${rowClass}` : '';
      return (
        <div key={`key-${i}`} className={`keyboard_row ${additionalRowClass}`}>
          {this.renderRow(keys)}
        </div>
      );
    });
  }

  renderRow(keys) {
    const { props } = this;
    return keys.map(posID => {
      const key = this._keyMap[posID];
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
}


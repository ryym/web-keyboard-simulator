import React from 'react';
import Key from './Key';
import StandardKeyboard from './StandardKeyboard';
import usKeyMap from '$services/key-maps/key-map-us';
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
      </div>
    );
  }

  selectKeyMap(type) {
    switch (type) {
    case 'US':
      return usKeyMap;
    case 'DVORAK':
      return dvorakKeyMap;
    }
  }

  selectLayout(type) {
    switch (type) {
    case 'US':
    case 'DVORAK':
      return StandardKeyboard;
    }
  }

  renderKeyboard(keyRows) {
    return keyRows.map(({ rowClass, keys }, i) => {
      const additionalRowClass = rowClass ? `keyboard_row-${rowClass}` : '';
      return (
        <div key={`us-${i}`} className={`keyboard_row ${additionalRowClass}`}>
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


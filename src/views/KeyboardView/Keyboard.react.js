import React from 'react';
import USKeyboard from './USKeyboard';
import Key from './Key';
import usKeyMap from '$services/key-maps/key-map-us';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this._keyMap = this.selectKeyMap(props.keyboardType);
    this.renderKeyboard = this.renderKeyboard.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    const SelectedKeyboard = this.selectLayout(this.props.keyboardType);
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
    }
  }

  selectLayout(type) {
    switch (type) {
    case 'US':
      return USKeyboard;
    }
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


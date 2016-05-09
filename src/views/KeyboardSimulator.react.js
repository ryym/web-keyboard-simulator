import React from 'react';
import InputScreen from './InputScreen';
import Keyboard from './Keyboard';
import usKeyMap from '$services/key-maps/key-map-us';

/**
 * KeyboardSimulator is a container of whole components.
 */
export default class KeyboardSimulator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressedKeys: {}
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  render() {
    const detectKeyPos = this.props.makeKeyPosDetector({
      keyboardType: 'JIS'
    });
    const generateOutput = this.props.makeOutputGenerator('US');

    return (
      <div>
        <InputScreen
          detectKeyPos={detectKeyPos}
          generateOutput={generateOutput}
          onKeyPressed={this.handleKeyPress}
          onKeyUp={this.handleKeyUp}
        />
        <div>
          <Keyboard
            keyMap={usKeyMap}
            pressedKeys={this.state.pressedKeys}
          />
        </div>
      </div>
    );
  }

  handleKeyPress(keyPos) {
    const { pressedKeys } = this.state;
    pressedKeys[keyPos] = true;
    this.setState({ pressedKeys });
  }

  handleKeyUp(keyPos) {
    const { pressedKeys } = this.state;
    delete pressedKeys[keyPos];
    this.setState({ pressedKeys });
  }
}

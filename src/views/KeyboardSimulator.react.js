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
  }

  render() {
    const { props } = this;
    return (
      <div>
        <InputScreen
          makeKeyPosDetector={props.makeKeyPosDetector}
          makeOutputGenerator={props.makeOutputGenerator}
        />
        <div>
          <Keyboard
            keyMap={usKeyMap}
            pressedKeys={[]}
          />
        </div>
      </div>
    );
  }
}

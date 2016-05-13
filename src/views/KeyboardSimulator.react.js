import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import InputScreen from './InputScreen';
import KeyboardView from './KeyboardView';

/**
 * KeyboardSimulator is a container of whole components.
 */
export default class KeyboardSimulator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressedKeys: {}
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  render() {
    const detectKeyPos = this.props.makeKeyPosDetector({
      keyboardType: 'JIS'
    });
    const findKeyData = this.props.makeKeyDataFinder('US');

    return (
      <main>
        <Header />
        <div>
          <InputScreen
            detectKeyPos={detectKeyPos}
            findKeyData={findKeyData}
            onKeyPressed={this.handleKeyPress}
            onKeyUp={this.handleKeyUp}
          />
          <KeyboardView
            pressedKeys={this.state.pressedKeys}
            keyboardType="US"
          />
        </div>
        <SideMenu />
      </main>
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

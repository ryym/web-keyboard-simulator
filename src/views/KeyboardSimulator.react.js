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
      pressedKeys: {},
      userKeyboardType: 'US',
      simulationKeyboardType: 'US'
    };

    this.changeKeyboard = this.changeKeyboard.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  render() {
    const { userKeyboardType, simulationKeyboardType } = this.state;
    const detectKeyPos = this.props.makeKeyPosDetector({
      keyboardType: userKeyboardType
    });
    const findKeyData = this.props.makeKeyDataFinder(simulationKeyboardType);

    return (
      <main>
        <Header />
        <SideMenu
          onKeyboardTypeChange={this.changeKeyboard}
        />
        <div>
          <InputScreen
            detectKeyPos={detectKeyPos}
            findKeyData={findKeyData}
            onKeyPressed={this.handleKeyPress}
            onKeyUp={this.handleKeyUp}
          />
          <KeyboardView
            pressedKeys={this.state.pressedKeys}
            keyboardType={simulationKeyboardType}
          />
        </div>
      </main>
    );
  }

  changeKeyboard(changeType, keyboardType) {
    this.setState({
      [changeType]: keyboardType
    });
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

import React from 'react';
import Header from './Header';
import Settings from './Settings';
import InputScreen from './InputScreen';
import KeyboardView from './KeyboardView';

require('./styles.scss');

/**
 * KeyboardSimulator is a container of whole components.
 */
export default class KeyboardSimulator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressedKeys: {},
      userKeyboardType: 'QWERTY',
      simulationKeyboardType: 'DVORAK'
    };

    this.changeKeyboard = this.changeKeyboard.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  render() {
    const { userKeyboardType, simulationKeyboardType } = this.state;
    const detectKeyPos = this.props.makeKeyPosDetector({
      keyboardType: userKeyboardType
    });
    const findKeyData = this.props.makeKeyDataFinder(simulationKeyboardType);

    return (
      <main className="container">
        <Header />
        <div className="main">
          <div className="main_item main_item-settings">
            <Settings
              onKeyboardTypeChange={this.changeKeyboard}
              userKeyboardType={userKeyboardType}
              simulationKeyboardType={simulationKeyboardType}
            />
          </div>
          <div className="main_item main_item-simulator">
            <InputScreen
              detectKeyPos={detectKeyPos}
              findKeyData={findKeyData}
              onKeyPressed={this.handleKeyPress}
              onKeyUp={this.handleKeyUp}
              onBlur={this.handleBlur}
            />
            <KeyboardView
              pressedKeys={this.state.pressedKeys}
              keyboardType={simulationKeyboardType}
            />
          </div>
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

  handleBlur() {
    this.setState({ pressedKeys: {} });
  }
}

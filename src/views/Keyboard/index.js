import React from 'react';
import USKeyboard from './USKeyboard';
require('./styles.scss');

export default class Keyboard extends React.Component {
  render() {
    return (
      <section className="keyboard-view">
        <USKeyboard {...this.props} />
      </section>
    );
  }
}

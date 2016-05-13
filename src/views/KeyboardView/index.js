import React from 'react';
import Keyboard from './Keyboard';
require('./styles.scss');

export default function KeyboardView(props) {
  return (
    <section className="keyboard-view">
      <Keyboard {...props} />
    </section>
  );
}

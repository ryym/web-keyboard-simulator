import React from 'react';
import InputScreen from './InputScreen';

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
      <InputScreen
        makeInputConverter={props.makeInputConverter}
        makeOutputGenerator={props.makeOutputGenerator}
      />
    );
  }
}

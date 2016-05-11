import React from 'react';
import log from '$services/log';

/**
 * InputScreen handles key-down and key-up events
 * and display its output on the specified keyboard.
 *
 * XXX:
 *  Instead of concat characters in this component,
 *  it is better to take the text to be printed as a prop
 *  from the container component.
 */
export default function InputScreen(props) {
  const handleKeyDown = makeKeyDownHandler(props);
  const handleKeyUp = makeKeyUpHandler(props);

  return (
    <textarea
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    />
  );
}

function makeKeyDownHandler(props) {
  const {
    detectKeyPos,
    generateOutput,
    onKeyPressed
  } = props;

  return (event) => {
    const keyPos = detectKeyPos(event.nativeEvent);

    if (keyPos !== undefined) {
      event.preventDefault();
      const character = generateOutput(keyPos, event);
      event.target.value += character || '';
      onKeyPressed(keyPos);

      log.debug(event, keyPos, character);
    }
    else {
      log.debug(event, ' no match');
    }
  };
}

function makeKeyUpHandler(props) {
  const {
    detectKeyPos,
    onKeyUp
  } = props;

  return (event) => {
    const keyPos = detectKeyPos(event.nativeEvent);
    onKeyUp(keyPos);
  };
}

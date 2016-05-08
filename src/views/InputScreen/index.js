import React from 'react';
import log from '$services/log';

export default function InputScreen(props) {
  const detectKeyPos = props.makeKeyPosDetector({
    keyboardType: 'JIS'
  });
  const output = props.makeOutputGenerator('US');
  const handleKeypress = makeKeypressHandler(detectKeyPos, output);

  return (
    <textarea onKeyPress={handleKeypress} />
  )
}

function makeKeypressHandler(detectKeyPos, output) {
  return (event) => {
    const keyPos = detectKeyPos(event.nativeEvent);

    if (keyPos !== undefined) {
      event.preventDefault();
      const character = output(keyPos, event);
      event.target.value += character;

      log.debug(event, keyPos, character);
    }
    else {
      log.debug(event, ' no match');
    }
  }
}

import React from 'react';
import log from '$services/log';

export default function InputScreen(props) {
  const convert = props.makeInputConverter({
    keyboardType: 'JIS'
  });
  const output = props.makeOutputGenerator('US');
  const handleKeypress = makeKeypressHandler(convert, output);

  return (
    <textarea onKeyPress={handleKeypress} />
  )
}

function makeKeypressHandler(convert, output) {
  return (event) => {
    const keyPos = convert(event.nativeEvent);

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

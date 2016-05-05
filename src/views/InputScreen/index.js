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
    const keyId = convert(event.nativeEvent);

    if (keyId !== undefined) {
      event.preventDefault();
      const character = output(keyId, event);
      event.target.value += character;

      log.debug(event, keyId, character);
    }
    else {
      log.debug(event, ' no match');
    }
  }
}

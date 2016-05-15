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
    <section className="input-screen">
      <textarea
        className="input-screen_textarea"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={props.onBlur}
      />
    </section>
  );
}

function makeKeyDownHandler(props) {
  const {
    detectKeyPos,
    findKeyData,
    onKeyPressed
  } = props;

  return (wrappedEvent) => {
    const event = wrappedEvent.nativeEvent;
    const keyPos = detectKeyPos(event);

    if (keyPos === undefined) {
      log.debug(event, ' no match');
      return;
    }

    const keyData = findKeyData(keyPos);

    // Don't prevent special actions like `Tab`, `Delete`, `Ctrl+F`, etc.
    if (keyData.isPrintable() && ! event.ctrlKey) {
      event.preventDefault();
      const character = keyData.getValue({ shiftKey: event.shiftKey });
      event.target.value += character || '';
    }

    onKeyPressed(keyPos);
    log.debug(event, keyPos, keyData);
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

import React from 'react';
import ReactDOM from 'react-dom';
import KeyboardSimulator from './KeyboardSimulator';

export function renderViewInto(containerId, {
  makeKeyPosDetector,
  makeOutputGenerator
}) {
  const $container = document.getElementById(containerId);
  const keyboardEvent = document.createEvent('KeyboardEvent');
  const simulatorProps = {
    makeKeyPosDetector: makeKeyPosDetector({ keyboardEvent }),
    makeOutputGenerator
  };

  ReactDOM.render(
    <KeyboardSimulator {...simulatorProps} />,
    $container
  );
}

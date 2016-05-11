import React from 'react';
import ReactDOM from 'react-dom';
import KeyboardSimulator from './KeyboardSimulator';

export function renderViewInto(containerId, {
  makeKeyPosDetector,
  makeKeyDataFinder
}) {
  const $container = document.getElementById(containerId);
  const keyboardEvent = document.createEvent('KeyboardEvent');
  const simulatorProps = {
    makeKeyPosDetector: makeKeyPosDetector({ keyboardEvent }),
    makeKeyDataFinder
  };

  ReactDOM.render(
    <KeyboardSimulator {...simulatorProps} />,
    $container
  );
}

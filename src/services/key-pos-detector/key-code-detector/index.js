import makeDetectorForJIS from './key-code-detector-jis';

// TODO: Imlement detectors that use keyCode for detection.

export function makeKeyPosDetectorFromKeyCode({ keyboardType, ...context }) {
  const detectFromKeyCode = makeDetectorFor(keyboardType, context);

  if (detectFromKeyCode !== undefined) {
    return (event) => {
      const keyCode = event.which || event.charCode || event.keyCode;
      return detectFromKeyCode(keyCode);
    };
  }
}

function makeDetectorFor(keyboardType, context) {
  switch (keyboardType) {
  case 'JIS': return makeDetectorForJIS(context);
  }
}

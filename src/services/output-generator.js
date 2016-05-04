import usKeyMap from './key-maps/key-map-us';
import dvorakKeyMap from './key-maps/key-map-dvorak';

export function makeOutputGenerator(keyboardType) {
  const keyMap = selectKeyMap(keyboardType);

  return (keyId, { shiftKey }) => {
    const key = String(keyId);

    if (! keyMap.hasOwnProperty(key)) {
      return '';
    }

    const [normal, withShift] = keyMap[key];
    return shiftKey ? withShift : normal;
  };
}

function selectKeyMap(keyboardType) {
  switch (keyboardType) {
  case 'US': return usKeyMap;
  case 'DVORAK': return dvorakKeyMap;
  }
}

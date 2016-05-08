import usKeyMap from './key-maps/key-map-us';
import jisKeyMap from './key-maps/key-map-jis';
import dvorakKeyMap from './key-maps/key-map-dvorak';

export function makeOutputGenerator(keyboardType) {
  const keyMap = selectKeyMap(keyboardType);

  return (keyPos, { shiftKey }) => {
    const positionID = String(keyPos);
    const key = keyMap[positionID];
    return key ? key.getValue({ shiftKey }) : undefined;
  };
}

function selectKeyMap(keyboardType) {
  switch (keyboardType) {
  case 'US': return usKeyMap;
  case 'JIS': return jisKeyMap;
  case 'DVORAK': return dvorakKeyMap;
  }
}

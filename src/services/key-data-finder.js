import usKeyMap from './key-maps/key-map-us';
import jisKeyMap from './key-maps/key-map-jis';
import dvorakKeyMap from './key-maps/key-map-dvorak';

export function makeKeyDataFinder(keyboardType) {
  const keyMap = selectKeyMap(keyboardType);

  return (keyPos) => {
    const positionID = String(keyPos);
    return keyMap[positionID];
  };
}

function selectKeyMap(keyboardType) {
  switch (keyboardType) {
  case 'US': return usKeyMap;
  case 'JIS': return jisKeyMap;
  case 'DVORAK': return dvorakKeyMap;
  }
}

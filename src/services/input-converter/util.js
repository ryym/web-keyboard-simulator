// export function normalizeKeyIdMap(idMap) {
//   return Object.keys(idMap).reduce((map, key) => {
//     const value = idMap[key];

//     if (typeof value === 'function') {
//       map[key] = value;
//     }
//     else {
//       map[key] = () => value;
//     }

//     return map;
//   }, {});
// }

export function makeFunctionFromMap(map, undefinedValue = undefined) {
  return function(key) {
    if (map.hasOwnProperty(key)) {
      return map[key];
    }
    return undefinedValue;
  };
}


export function makeFunctionFromMap(map, undefinedValue = undefined) {
  return function(key) {
    if (map.hasOwnProperty(key)) {
      return map[key];
    }
    return undefinedValue;
  };
}

import outputAsUS from './output-as-us';

export function makeOutputGenerator(keyboardType) {
  switch (keyboardType) {
  case 'US': return outputAsUS;
  }
}

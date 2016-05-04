import outputAsUS from './output-as-us';
import outputAsDvorak from './output-as-dvorak';

export function makeOutputGenerator(keyboardType) {
  switch (keyboardType) {
  case 'US': return outputAsUS;
  case 'DVORAK': return outputAsDvorak;
  }
}

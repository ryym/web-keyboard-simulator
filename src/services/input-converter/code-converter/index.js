import convertInput from './code-converter';

export function makeInputConverterFromCode() {
  return (event) => convertInput(event.code);
}

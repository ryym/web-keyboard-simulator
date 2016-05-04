import makeConverterForJIS from './key-code-converter-jis';

export function makeInputConverterFromKeyCode({ keyboardType, ...context }) {
  const convertInput = makeConverterFor(keyboardType, context);

  if (convertInput !== undefined) {
    return (event) => {
      const keyCode = event.which || event.charCode || event.keyCode;
      return convertInput(keyCode);
    };
  }
}

function makeConverterFor(keyboardType, context) {
  switch (keyboardType) {
  case 'JIS': return makeConverterForJIS(context);
  }
}

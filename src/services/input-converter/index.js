import { makeInputConverterFromCode } from './code-converter';
import { makeInputConverterFromKeyCode } from './key-code-converter';
import log from '$services/log';

export const makeInputConverter = (keyboardEvent) => (context) => {
  if (keyboardEvent === undefined) {
    return;
  }

  if (keyboardEvent.code !== undefined) {
    log.debug('Use code converter');
    return makeInputConverterFromCode(context);
  }

  if (keyboardEvent.keyCode !== undefined) {
    log.debug('Use keyCode converter');
    return makeInputConverterFromKeyCode(context);
  }
}

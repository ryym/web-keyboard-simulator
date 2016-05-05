import { makeInputConverter } from './services/input-converter';
import { makeOutputGenerator } from './services/output-generator';
import { renderViewInto } from './views';

require('./tmp.css');

renderViewInto('main', {
  makeInputConverter,
  makeOutputGenerator
});

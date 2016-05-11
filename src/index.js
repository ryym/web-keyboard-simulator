import { makeKeyPosDetector } from './services/key-pos-detector';
import { makeKeyDataFinder } from './services/key-data-finder';
import { renderViewInto } from './views';

require('./styles.scss');

renderViewInto('main', {
  makeKeyPosDetector,
  makeKeyDataFinder
});

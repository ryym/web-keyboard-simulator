import { makeKeyPosDetector } from './services/key-pos-detector';
import { makeOutputGenerator } from './services/output-generator';
import { renderViewInto } from './views';

renderViewInto('main', {
  makeKeyPosDetector,
  makeOutputGenerator
});

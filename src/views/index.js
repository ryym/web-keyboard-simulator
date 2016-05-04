import log from '$services/log';

export function renderViewInto(containerId, {
  makeInputConverter,
  makeOutputGenerator
}) {
  const $container = document.getElementById(containerId);

  const convert = makeInputConverter({
    keyboardEvent: document.createEvent('KeyboardEvent'),
    keyboardType: 'JIS'
  });

  const output = makeOutputGenerator('US');

  $container.innerHTML = `
    <textarea id="test"></textarea>
    <textarea id="normal"></textarea>
  `;

  const $text = document.getElementById('test');

  $text.addEventListener('keypress', (event) => {
    const keyId = convert(event);

    if (keyId !== undefined) {
      event.preventDefault();
      const character = output(keyId, event);
      $text.value += character;

      log.debug(event, keyId, character);
    }
    else {
      log.debug(event, ' no match');
    }
  });
}

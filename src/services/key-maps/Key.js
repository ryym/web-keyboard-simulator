
export default class Key {
  constructor(outputs, labels, { size = 1 } = {}) {
    if (labels === undefined || labels.length === 0) {
      labels = outputs;
    }

    // shift, non-shift
    this._labels = labels.slice().reverse();
    this._size = size;

    const [character, shiftChar] = outputs;
    this._char = character;
    this._shiftChar = shiftChar;
  }

  getValue({ shiftKey }) {
    return shiftKey ? this._shiftChar : this._char;
  }

  getLabels() {
    return this._labels.slice();
  }

  getSize() {
    return this._size;
  }

  isPrintable() {
    return this._char !== null;
  }
}

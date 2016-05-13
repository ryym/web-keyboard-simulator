import React from 'react';
import classNames from 'classnames';

export default function Key({ labels, size = 1, pressed }) {
  return (
    <div
      className={classNames(
        'keyboard_key',
        { 'is-key-pressed': pressed }
      )}
      style={{ flexGrow: size }}
    >
      {renderLabels(labels)}
    </div>
  );
}

function renderLabels(labels) {
  return labels.map(label => (
    <div key={label} className="keyboard_key_label">
      {label}
    </div>
  ));
}

import log from 'loglevel';

log.setLevel('debug');

const prefixes = {
  trace: '[trace]',
  debug: '[debug]',
  info: '[info]',
  warn: '[WARN]',
  error: '[ERROR]'
};

const prefixedLog = Object.keys(prefixes).reduce((pfLog, level) => {
  const prefix = prefixes[level];
  pfLog[level] = log[level].bind(log, prefix);
  return pfLog;
}, {});

export default prefixedLog;

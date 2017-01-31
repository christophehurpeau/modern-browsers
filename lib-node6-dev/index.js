'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isModernBrowser;

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{ name: 'Edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 14 }, { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 51 }, { name: 'Chrome', regexp: /chrom(?:e|ium)\/([\d]+)/i, modernMinVersion: 51 }, // also works for opera.
{ name: 'Safari', regexp: /version\/([\d\w.-]+).*safari/i, modernMinVersion: 10 }];

function isModernBrowser(userAgent) {
  _assert(userAgent, _tcombForked2.default.String, 'userAgent');

  return agents.some(agent => {
    const res = agent.regexp.exec(userAgent);
    return res && res[1] >= agent.modernMinVersion;
  });
}

function _assert(x, type, name) {
  if (_tcombForked2.default.isType(type) && type.meta.kind !== 'struct') {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcombForked2.default.getTypeName(type)]);
    }
  } else if (!(x instanceof type)) {
    _tcombForked2.default.fail('Invalid value ' + _tcombForked2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcombForked2.default.getTypeName(type) + ')');
  }

  return x;
}
//# sourceMappingURL=index.js.map
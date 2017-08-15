'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isModernBrowser;
// https://www.npmjs.com/package/babel-preset-modern-browsers
var agents = [{ name: 'Edge', optionName: 'edge', regexp: /edge\/([\d]+)/i, modernMinVersion: 15 }, { name: 'Firefox', regexp: /firefox\/([\d]+)/i, modernMinVersion: 55 }, { name: 'Chrome', regexp: /chrom(?:e|ium)\/([\d]+)/i, modernMinVersion: 60 }, // also works for opera.
{
  name: 'Safari',
  optionName: 'safari10',
  regexp: /version\/([\d\w.-]+).*safari/i,
  modernMinVersion: 10.1
}];

function isModernBrowser(userAgent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { edge: true, safari10: true };

  return agents.some(function (agent) {
    if (agent.optionName && !options[agent.optionName]) return false;
    var res = agent.regexp.exec(userAgent);
    return res && parseFloat(res[1]) >= agent.modernMinVersion;
  });
}
//# sourceMappingURL=index.js.map
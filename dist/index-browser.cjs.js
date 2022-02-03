'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// https://www.npmjs.com/package/babel-preset-modern-browsers
var minVersions = {
  chrome: 80,
  firefox: 78,
  safari: 13.1 // 'mobile safari webview': 605.1,

};
var agents = [{
  key: 'firefox',
  regExp: /firefox\/(\d+)/i
}, {
  key: 'chrome',
  regExp: /chrom(?:e|ium)\/(\d+)/i
}, // also works for opera and edge.
{
  key: 'safari',
  regExp: /version\/([\d.]+).*safari/i
} // {
//   key: 'mobile safari webview',
//   regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i,
// },
];
function isModernBrowser(userAgent) {
  var agent;
  agents.some(function (_ref) {
    var key = _ref.key,
        regExp = _ref.regExp;
    var res = regExp.exec(userAgent);
    if (!res || !res[1]) return false;
    agent = {
      key: key,
      version: res[1]
    };
    return true;
  });
  if (!agent) return false;
  var minVersion = minVersions[agent.key];
  if (!minVersion) return false;
  return parseFloat(agent.version) >= minVersion;
}

exports["default"] = isModernBrowser;
//# sourceMappingURL=index-browser.cjs.js.map

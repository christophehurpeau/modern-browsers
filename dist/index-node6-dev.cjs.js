'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var t = _interopDefault(require('flow-runtime'));

// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{ key: 'edge', regExp: /edge\/([\d]+)/i }, { key: 'firefox', regExp: /firefox\/([\d]+)/i }, { key: 'chrome', regExp: /chrom(?:e|ium)\/([\d]+)/i }, // also works for opera.
{ key: 'safari', regExp: /version\/([\d.]+).*safari/i }, { key: 'mobile safari webview', regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i }];

const minVersionsForOptions = options => {
  if (options.edge || options.safari10) {
    return {
      edge: 15,
      firefox: 53,
      chrome: 55,
      safari: 10.1,
      // https://en.wikipedia.org/wiki/Safari_version_history
      'mobile safari webview': 603.1
    };
  }

  return { firefox: 55, chrome: 60 };
};

var index = ((options = { edge: true, safari10: true }) => {
  const minVersions = minVersionsForOptions(options);
  return userAgent => {
    let _userAgentType = t.string();

    t.param('userAgent', _userAgentType).assert(userAgent);

    let agent;
    agents.some(({ key, regExp }) => {
      const res = regExp.exec(userAgent);
      if (!res || !res[1]) return false;
      agent = { key, version: res[1] };
      return true;
    });
    if (!agent) return false;

    const minVersion = minVersions[agent.key];
    if (!minVersion) return false;
    return parseFloat(agent.version) >= minVersion;
  };
});

exports.minVersionsForOptions = minVersionsForOptions;
exports.default = index;
//# sourceMappingURL=index-node6-dev.cjs.js.map

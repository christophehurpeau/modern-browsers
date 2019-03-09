// https://www.npmjs.com/package/babel-preset-modern-browsers
var agents = [{
  key: 'edge',
  regExp: /edge\/([\d]+)/i
}, {
  key: 'firefox',
  regExp: /firefox\/([\d]+)/i
}, {
  key: 'chrome',
  regExp: /chrom(?:e|ium)\/([\d]+)/i
}, // also works for opera.
{
  key: 'safari',
  regExp: /version\/([\d.]+).*safari/i
}, {
  key: 'mobile safari webview',
  regExp: /(?:iPod|iPhone|iPad).+AppleWebKit\/([\d.]+)/i
}];
var minVersionsForOptions = function minVersionsForOptions(options) {
  if (options.edge) {
    return {
      edge: 15,
      firefox: 53,
      chrome: 55,
      safari: 10.1,
      // https://en.wikipedia.org/wiki/Safari_version_history
      'mobile safari webview': 603.1
    };
  }

  return {
    firefox: 58,
    chrome: 66,
    safari: 12,
    'mobile safari webview': 605.1
  };
};
var index = (function (options) {
  if (options === void 0) {
    options = {
      edge: true
    };
  }

  if (options.safari10 !== undefined) {
    throw new Error('option safari10 removed');
  }

  var minVersions = minVersionsForOptions(options);
  return function (userAgent) {
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
  };
});

export default index;
export { minVersionsForOptions };
//# sourceMappingURL=index-browser-dev.es.js.map

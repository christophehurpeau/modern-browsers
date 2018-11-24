// https://www.npmjs.com/package/babel-preset-modern-browsers
const agents = [{
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
const minVersionsForOptions = options => {
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
    safari: 11.1,
    'mobile safari webview': 605.1
  };
};
var index = ((options = {
  edge: true
}) => {
  if (options.safari10 !== undefined) {
    throw new Error('option safari10 removed');
  }

  const minVersions = minVersionsForOptions(options);
  return userAgent => {
    let agent;
    agents.some(({
      key,
      regExp
    }) => {
      const res = regExp.exec(userAgent);
      if (!res || !res[1]) return false;
      agent = {
        key,
        version: res[1]
      };
      return true;
    });
    if (!agent) return false;
    const minVersion = minVersions[agent.key];
    if (!minVersion) return false;
    return parseFloat(agent.version) >= minVersion;
  };
});

export default index;
export { minVersionsForOptions };
//# sourceMappingURL=index-node10-dev.es.js.map

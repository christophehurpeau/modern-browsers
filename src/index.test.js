import isModernBrowser from './';

const userAgents = {
  'edge 15':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
  'chrome 60 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
  'opera 47 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36 OPR/47.0.2631.55',
  'firefox 55 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
  'firefox 55 for windows': 'Mozilla/5.0 (Windows NT 6.1; rv:55.0) Gecko/20100101 Firefox/55.0',
  'safari 10.1 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',

  'ie 11': 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
  'edge 13':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
  'edge 14':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
  'safari 8 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17',
  'safari 10 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8',
  'safari 10 for iOS':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
  'firefox 51 for windows':
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
  'firefox 51 for linux':
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:51.0) Gecko/20100101 Firefox/51.0',
  'firefox 52 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0',
  'firefox 54 for windows':
    'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0',
  'opera 34 for mac':
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25',
  'opera 43 for windows':
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36 OPR/43.0.2442.806',
  'chrome 56 for mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36',
  'chrome 56 on iOS':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
};

describe('{ edge: false, safari10: false }', () => {
  describe('modern browsers', () => {
    [
      'chrome 60 for mac',
      'opera 47 for mac',
      'firefox 55 for mac',
      'firefox 55 for windows',
    ].forEach(name => {
      test(name, () =>
        expect(isModernBrowser(userAgents[name], { edge: false, safari10: false })).toBe(true),
      );
    });
  });

  describe('old browsers', () => {
    [
      'ie 11',
      'edge 13',
      'edge 14',
      'edge 15',
      'safari 8 for mac',
      'safari 10 for mac',
      'safari 10 for iOS',
      'safari 10.1 for mac',
      'firefox 51 for windows',
      'firefox 51 for linux',
      'firefox 52 for mac',
      'firefox 54 for windows',
      'opera 34 for mac',
      'opera 43 for windows',
      'chrome 56 for mac',
      'chrome 56 on iOS',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowser(userAgents[name], { edge: false, safari10: false })).toBe(false);
      });
    });
  });
});

describe('{ edge: true, safari10: true }', () => {
  describe('modern browsers', () => {
    [
      'edge 15',
      'chrome 60 for mac',
      'opera 47 for mac',
      'firefox 54 for windows',
      'firefox 55 for mac',
      'firefox 55 for windows',
      'safari 10.1 for mac',
      'opera 43 for windows',
      'chrome 56 for mac',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowser(userAgents[name], { edge: true, safari10: false })).toBe(true);
        expect(isModernBrowser(userAgents[name], { edge: false, safari10: true })).toBe(true);
        expect(isModernBrowser(userAgents[name], { edge: true, safari10: true })).toBe(true);
      });
    });
  });

  describe('old browsers', () => {
    [
      'ie 11',
      'edge 13',
      'edge 14',
      'safari 8 for mac',
      'safari 10 for mac',
      'safari 10 for iOS',
      'firefox 51 for windows',
      'firefox 51 for linux',
      'firefox 52 for mac',
      'opera 34 for mac',
      'chrome 56 on iOS',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowser(userAgents[name], { edge: true, safari10: false })).toBe(false);
        expect(isModernBrowser(userAgents[name], { edge: false, safari10: true })).toBe(false);
        expect(isModernBrowser(userAgents[name], { edge: true, safari10: true })).toBe(false);
      });
    });
  });
});

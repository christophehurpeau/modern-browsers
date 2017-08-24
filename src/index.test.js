import createIsModernBrowser from './';

const userAgents = {
  'edge 15':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
  'chrome 60 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
  'opera 47 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36 OPR/47.0.2631.55',
  'firefox 55 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
  'firefox 55 on windows': 'Mozilla/5.0 (Windows NT 6.1; rv:55.0) Gecko/20100101 Firefox/55.0',
  'safari 10.1 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',

  'ie 11': 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
  'edge 13':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
  'edge 14':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
  'safari 8 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17',
  'safari 10 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8',
  'safari 10 on iPhone':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
  'chrome 60 on iPhone 10.3.3':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS/60.0.3112.89 Mobile/14G60 Safari/602.1',
  'firefox 51 on windows':
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
  'firefox 51 on linux':
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:51.0) Gecko/20100101 Firefox/51.0',
  'firefox 52 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0',
  'firefox 54 on windows':
    'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0',
  'firefox focus on iPhone 10.3':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Focus/3.3.1 Mobile/14G60',
  'opera 34 on mac':
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25',
  'opera 43 on windows':
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36 OPR/43.0.2442.806',
  'chrome 56 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36',
  'chrome 56 on iPhone 10.3':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
};

describe('{ edge: false, safari10: false }', () => {
  const isModernBrowser = createIsModernBrowser({ edge: false, safari10: false });

  describe('modern browsers', () => {
    [
      'chrome 60 on mac',
      'opera 47 on mac',
      'firefox 55 on mac',
      'firefox 55 on windows',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowser(userAgents[name])).toBe(true);
      });
    });
  });

  describe('old browsers', () => {
    [
      'ie 11',
      'edge 13',
      'edge 14',
      'edge 15',
      'chrome 56 on mac',
      'opera 34 on mac',
      'opera 43 on windows',
      'safari 8 on mac',
      'safari 10 on mac',
      'safari 10 on iPhone',
      'safari 10.1 on mac',
      'chrome 56 on iPhone 10.3',
      'chrome 60 on iPhone 10.3.3',
      'firefox focus on iPhone 10.3',
      'firefox 51 on windows',
      'firefox 51 on linux',
      'firefox 52 on mac',
      'firefox 54 on windows',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowser(userAgents[name])).toBe(false);
      });
    });
  });
});

describe('{ edge: true, safari10: true }', () => {
  const isModernBrowserWithEdge = createIsModernBrowser({ edge: true, safari10: false });
  const isModernBrowserWithSafari = createIsModernBrowser({ edge: false, safari10: true });
  const isModernBrowserWithBoth = createIsModernBrowser({ edge: true, safari10: true });

  describe('modern browsers', () => {
    [
      'edge 15',
      'chrome 56 on mac',
      'chrome 60 on mac',
      'opera 43 on windows',
      'opera 47 on mac',
      'safari 10.1 on mac',
      'chrome 60 on iPhone 10.3.3',
      'firefox focus on iPhone 10.3',
      'firefox 54 on windows',
      'firefox 55 on mac',
      'firefox 55 on windows',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowserWithEdge(userAgents[name])).toBe(true);
        expect(isModernBrowserWithSafari(userAgents[name])).toBe(true);
        expect(isModernBrowserWithBoth(userAgents[name])).toBe(true);
      });
    });
  });

  describe('old browsers', () => {
    [
      'ie 11',
      'edge 13',
      'edge 14',
      'chrome 56 on iPhone 10.3',
      'opera 34 on mac',
      'safari 8 on mac',
      'safari 10 on mac',
      'safari 10 on iPhone',
      'firefox 51 on windows',
      'firefox 51 on linux',
      'firefox 52 on mac',
    ].forEach(name => {
      test(name, () => {
        expect(isModernBrowserWithEdge(userAgents[name])).toBe(false);
        expect(isModernBrowserWithSafari(userAgents[name])).toBe(false);
        expect(isModernBrowserWithBoth(userAgents[name])).toBe(false);
      });
    });
  });
});

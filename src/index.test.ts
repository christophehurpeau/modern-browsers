import createIsModernBrowser from '.';

const userAgents: { [key: string]: string } = {
  'ie 11':
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
  'edge 13':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
  'edge 14':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
  'edge 15':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
  'safari 8 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17',
  'safari 10 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8',
  'safari 10.1 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',
  'safari 11.1 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13) AppleWebKit/605.1.4 (KHTML, like Gecko) Version/11.1 Safari/605.1.4',
  'safari 12 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.3 Safari/605.1.15',
  'safari 10 on iPhone':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
  'chrome 56 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36',
  'chrome 56 on iPhone 10.3':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
  'chrome 60 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
  'chrome 60 on iPhone 10.3.3':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS/60.0.3112.89 Mobile/14G60 Safari/602.1',
  'chrome 63 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3218.0 Safari/537.36',
  'chrome 66 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3351.0 Safari/537.36',
  'firefox 51 on windows':
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
  'firefox 51 on linux':
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:51.0) Gecko/20100101 Firefox/51.0',
  'firefox 52 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0',
  'firefox 54 on windows':
    'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0',
  'firefox 55 on windows':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:55.0) Gecko/20100101 Firefox/55.0',
  'firefox 55 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
  'firefox 56 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:56.0) Gecko/20100101 Firefox/56.0',
  'firefox 57 on linux':
    'Mozilla/5.0 (X11; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0',
  'firefox 58 on windows':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0',
  'firefox focus on iPhone 10.3':
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Focus/3.3.1 Mobile/14G60',
  'opera 34 on mac':
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25',
  'opera 43 on windows':
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36 OPR/43.0.2442.806',
  'opera 47 on mac':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36 OPR/47.0.2631.55',
  'opera 50 on linux':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36 OPR/50.0.2762.45',
  'opera 53 on linux':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.170 Safari/537.36 OPR/53.0.2907.68',
};

describe('{ edge: false }', () => {
  const isModernBrowser = createIsModernBrowser({ edge: false });

  describe('modern browsers', () => {
    [
      'safari 12 on mac',
      'chrome 66 on mac',
      'opera 53 on linux',
      'firefox 58 on windows',
    ].forEach((name) => {
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
      'chrome 60 on mac',
      'chrome 63 on mac',
      'opera 34 on mac',
      'opera 43 on windows',
      'opera 47 on mac',
      'opera 50 on linux',
      'safari 8 on mac',
      'safari 10 on mac',
      'safari 10 on iPhone',
      'safari 10.1 on mac',
      'safari 11.1 on mac',
      'chrome 56 on iPhone 10.3',
      'chrome 60 on iPhone 10.3.3',
      'firefox focus on iPhone 10.3',
      'firefox 51 on windows',
      'firefox 51 on linux',
      'firefox 52 on mac',
      'firefox 54 on windows',
      'firefox 55 on mac',
      'firefox 55 on windows',
      'firefox 56 on mac',
      'firefox 57 on linux',
    ].forEach((name) => {
      test(name, () => {
        expect(isModernBrowser(userAgents[name])).toBe(false);
      });
    });
  });
});

describe('{ edge: true }', () => {
  const isModernBrowserWithEdge = createIsModernBrowser({ edge: true });

  describe('modern browsers', () => {
    [
      'edge 15',
      'chrome 56 on mac',
      'chrome 60 on mac',
      'opera 43 on windows',
      'opera 47 on mac',
      'safari 11.1 on mac',
      'chrome 60 on iPhone 10.3.3',
      'firefox focus on iPhone 10.3',
      'firefox 54 on windows',
      'firefox 55 on mac',
      'firefox 55 on windows',
      'safari 11.1 on mac',
      'firefox 55 on windows',
      'firefox 55 on mac',
      'firefox 56 on mac',
      'chrome 63 on mac',
      'opera 50 on linux',
    ].forEach((name) => {
      test(name, () => {
        expect(isModernBrowserWithEdge(userAgents[name])).toBe(true);
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
    ].forEach((name) => {
      test(name, () => {
        expect(isModernBrowserWithEdge(userAgents[name])).toBe(false);
      });
    });
  });
});

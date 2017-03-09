/* global suite, test */
import { ok } from 'assert';
import isModernBrowser from '../';

suite('modern browsers', () => {
  test('chrome 56 for mac', () => {
    ok(isModernBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'));
  });

  test('opera 43 for windows', () => {
    ok(isModernBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36 OPR/43.0.2442.806'));
  });

  test('safari 10 for mac', () => {
    ok(isModernBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8'));
  });

  test('safari 10 for ios', () => {
    ok(isModernBrowser('Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1'));
  });

  test('firefox 52 for mac', () => {
    ok(isModernBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:52.0) Gecko/20100101 Firefox/52.0'));
  });

  test('edge 14', () => {
    ok(isModernBrowser('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'));
  });
});

suite('old browsers', () => {
  test('ie 11', () => {
    ok(!isModernBrowser('Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'));
  });

  test('edge 13', () => {
    ok(!isModernBrowser('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586'));
  });

  test('safari 8 for mac', () => {
    ok(!isModernBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17'));
  });

  test('firefox 51 for windows', () => {
    ok(!isModernBrowser('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0'));
  });

  test('firefox 51 for linux', () => {
    ok(!isModernBrowser('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:51.0) Gecko/20100101 Firefox/51.0'));
  });

  test('opera 34 for mac', () => {
    ok(!isModernBrowser('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25'));
  });
});

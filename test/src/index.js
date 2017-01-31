/* global suite, test */
import { ok } from 'assert';
import isModernBrowser from '../../';

suite('chrome', () => {
  test('chrome 56 for mac', () => {
    ok(isModernBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'));
  });
});

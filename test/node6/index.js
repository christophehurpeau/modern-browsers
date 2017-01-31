'use strict';

var _assert = require('assert');

var _ = require('../../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global suite, test */
suite('chrome', () => {
  test('chrome 56 for mac', () => {
    (0, _assert.ok)((0, _2.default)('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'));
  });
});
//# sourceMappingURL=index.js.map
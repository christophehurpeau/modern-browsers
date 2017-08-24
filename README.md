# modern-browsers [![NPM version][npm-image]][npm-url]

Regexp of modern browsers

[![Build Status][circleci-status-image]][circleci-status-url]
[![Travis Status][travisci-status-image]][travisci-status-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Coverage percentage][coverage-image]][coverage-url]

## Why ?

You can use it with [babel-preset-modern-browsers](https://www.npmjs.com/package/babel-preset-modern-browsers) to serve a different bundle with modern browsers.

## Install

```bash
npm install --save modern-browsers
```

## Usage

```js
import createIsModernBrowser from 'modern-browsers';

const isModernBrowser = createIsModernBrowser({ edge: true, safari10: true });

console.log(isModernBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'));
```

## Options

- `edge`: default to `true`, set to `false` if you configured `edge: false` in the preset.
- `safari10`: default to `true`, set to `false` if you configured `safari10: false` in the preset.

[npm-image]: https://img.shields.io/npm/v/modern-browsers.svg?style=flat-square
[npm-url]: https://npmjs.org/package/modern-browsers
[daviddm-image]: https://david-dm.org/christophehurpeau/modern-browsers.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/modern-browsers
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/modern-browsers/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/modern-browsers
[circleci-status-image]: https://img.shields.io/circleci/project/christophehurpeau/modern-browsers/master.svg?style=flat-square
[circleci-status-url]: https://circleci.com/gh/christophehurpeau/modern-browsers
[travisci-status-image]: https://img.shields.io/travis/christophehurpeau/modern-browsers/master.svg?style=flat-square
[travisci-status-url]: https://travis-ci.org/christophehurpeau/modern-browsers
[coverage-image]: https://img.shields.io/codecov/c/github/christophehurpeau/modern-browsers/master.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/christophehurpeau/modern-browsers
[docs-coverage-url]: https://christophehurpeau.github.io/modern-browsers/coverage/lcov-report/

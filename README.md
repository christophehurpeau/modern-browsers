<h3 align="center">
  modern-browsers
</h3>

<p align="center">
  Regexp of modern browsers
</p>

<p align="center">
  <a href="https://npmjs.org/package/modern-browsers"><img src="https://img.shields.io/npm/v/modern-browsers.svg?style=flat-square"></a>
  <a href="https://codecov.io/gh/christophehurpeau/modern-browsers"><img src="https://img.shields.io/codecov/c/github/christophehurpeau/modern-browsers/master.svg?style=flat-square"></a>
</p>

## Why ?

You can use it with [babel-preset-modern-browsers](https://www.npmjs.com/package/babel-preset-modern-browsers) to serve a different bundle with modern browsers.

## Install

```bash
npm install --save modern-browsers
```

## Usage

```js
import isModernBrowser from 'modern-browsers';

console.log(
  isModernBrowser(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'
  )
);
```

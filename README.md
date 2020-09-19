# PostCSS Colour [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[PostCSS Colour] lets you use define colours in css the way her majesty Queen Elizabeth II intended it.

Build and test architecture cloned from [postcss-short-size]

```pcss
body {
  colour: Blue;
  background-colour: #fff;
  border-colour: rgb(25, 0, 0);
}

/* becomes */

body {
  color: Blue;
  background-color: #fff;
  border-color: rgb(25, 0, 0);
}
```

## Usage

Add [PostCSS Colour] to your project:

```bash
npm install postcss postcss-colour --save-dev
```

Use [PostCSS Colour] to process your CSS:

```js
const postcssColour = require('postcss-colour');

postcssColour.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssColour = require('postcss-colour');

postcss([
  postcssColour(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Colour] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Colour]: https://github.com/rjdestigter/postcss-colour
[postcss-short-size]: https://github.com/jonathantneal/postcss-short-size
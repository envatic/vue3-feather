# vue3-feather

[![NPM version](https://img.shields.io/npm/v/vue3-feather.svg?style=flat)](https://npmjs.com/package/vue3-feather) [![NPM downloads](https://img.shields.io/npm/dm/vue3-feather.svg?style=flat)](https://npmjs.com/package/vue3-feather) [![CircleCI](https://circleci.com/gh/envatic/vue3-feather/tree/master.svg?style=shield)](https://circleci.com/gh/envatic/vue3-feather/tree/master) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/envatic/donate)

## Install

```bash
yarn add vue3-feather
```

## Usage

```js
// Only import what you need!
import { AirplayIcon, AtSignIcon, ... } from 'vue3-feather'
```
This is a Fork of [https://github.com/egoist/vue-feather-icons](https://github.com/egoist/vue-feather-icons)
See all icons and usage here: https://vue3-feather.netlify.app

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute.
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<activity-icon size="1.5x" class="custom-class"></activity-icon>
```

You can also set a `px` size directly by just passing an integer

```html
<activity-icon size="25" class="custom-class"></activity-icon>
```

## Tree shaking

By using ES imports like `import { AirplayIcon } from 'vue3-feather'` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.

To make webpack tree shaking work without using any minifier, you can use the per-file icons from [`icons`](https://unpkg.com/vue3-feather/icons/) directory, e.g. `import AirplayIcon from 'vue3-feather/icons/AirplayIcon'`.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**vue3-feather** © [envatic](https://github.com/envatic), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by envatic with help from contributors ([list](https://github.com/envatic/vue3-feather/contributors)).

> [envatic.moe](https://envatic.moe) · GitHub [@envatic](https://github.com/envatic) · Twitter [@\_envaticlily](https://twitter.com/_envaticlily)

# fancy-eases

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This is a set of easing equations which are outside of standard Penner easing equations.

## Usage

### `var bezier = require('fancy-eases')([opt])`

![bezier](./images/bezier.png)
*`Will render eases based on cubic bezier curves`*

This function will 

Simply wraps the (`cubic-bezier`)[http://www.npmjs.com/cubic-bezier] module to have a consistent api with the rest of the fancy eases.


### `var stepped = require('fancy-eases/stepped')([opt])`

![stepped](./images/stepped.png)
*`Rendering with two steps`*

![stepped expo](./images/steppedExpo.png)
*`Rendering with two steps and ease expo`*

Returns an easing function for stepped eases with the following optional options:
- `steps` the number of steps you'd like to have. The above is with two steps. Default value `1`
- `ease` an ease equation which will modify the original steps.

[![NPM](https://nodei.co/npm/fancy-eases.png)](https://www.npmjs.com/package/fancy-eases)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/fancy-eases/blob/master/LICENSE.md) for details.

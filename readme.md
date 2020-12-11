# box-plot [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/box-plot/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/box-plot)

Calculate the parameters for a box plot.

[![NPM Badge](https://nodei.co/npm/box-plot.png)](https://npmjs.com/package/box-plot)

## Install

```sh
npm install box-plot
```

## Usage

```js
const boxPlot = require("box-plot")

boxPlot([-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25])
//=> { maximum: 10, upperQuartile: 9, median: 5.5, lowerQuartile: 2, minimum: 1 }
```

## API

### boxPlot(values)

#### values

Type: `number[]`

An array of values to compute the box plot for.

#### Return value

##### maximum

Type: `number`

The largest value that is not an outlier. An outlier is a number that is greater than 1.5x the difference between the upper and lower quartile added to the upper quartile.

##### upperQuartile

Type: `number`

The median of the values after the middle number(s).

##### median

Type: `number`

The median of all of the values.

##### lowerQuartile

Type: `number`

The median of the values before the middle number(s).

##### minimum

Type: `number`

The smallest value that is not an outlier. An outlier is a number that is smaller than 1.5x the difference between the upper and lower quartile subtracted from the lower quartile.

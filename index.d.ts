declare namespace boxPlot {
	export interface BoxPlotData {
		/**
		The largest value that is not an outlier. An outlier is a number that is greater than 1.5x the difference between the upper and lower quartile added to the upper quartile.
		*/
		maximum: number

		/**
		The median of the values after the middle number(s).
		*/
		upperQuartile: number

		/**
		The median of all of the values.
		*/
		median: number

		/**
		The median of the values before the middle number(s).
		*/
		lowerQuartile: number

		/**
		The smallest value that is not an outlier. An outlier is a number that is smaller than 1.5x the difference between the upper and lower quartile subtracted from the lower quartile.
		*/
		minimum: number
	}
}

/**
Calculate the parameters for a box plot.

@param values An array of values to compute the box plot for.

@example
```
const boxPlot = require("box-plot")

boxPlot([-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25])
//=> { maximum: 10, upperQuartile: 9, median: 5.5, lowerQuartile: 2, minimum: 1 }
```
*/
declare function boxPlot(values: number[]): boxPlot.BoxPlotData

export = boxPlot

"use strict"
const numberSort = require("num-sort")
const medianAverage = require("median-average")

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError("Expected an array of numbers")
	}

	const sortedArray = [...array].sort(numberSort.ascending)

	const median = medianAverage(sortedArray)
	const upperQuartile = medianAverage(sortedArray.slice(sortedArray.length % 2 === 0 ? (sortedArray.length / 2) + 1 : Math.floor(sortedArray.length / 2) + 1))
	const lowerQuartile = medianAverage(sortedArray.slice(0, sortedArray.length % 2 === 0 ? (sortedArray.length / 2) - 1 : Math.floor(sortedArray.length / 2)))

	const outlierDistance = (upperQuartile - lowerQuartile) * 1.5
	const upperThreshold = upperQuartile + outlierDistance
	const lowerThreshold = lowerQuartile - outlierDistance

	return {
		maximum: Math.max(...sortedArray.filter(value => value < upperThreshold)),
		upperQuartile,
		median,
		lowerQuartile,
		minimum: Math.min(...sortedArray.filter(value => lowerThreshold < value))
	}
}

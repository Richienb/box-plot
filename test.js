const test = require("ava")
const boxPlot = require(".")

test("main", t => {
	t.deepEqual(boxPlot([-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25]), {
		maximum: 10,
		upperQuartile: 9,
		median: 5.5,
		lowerQuartile: 2,
		minimum: 1
	})
})

test("Expected an array of numbers error", t => {
	// Each test case is an array to be unpacked
	// and used as a list of arguments
	const testCases = [
		[42],
		[-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25],
		[{ values: [-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25] }]
	]

	for (const testCase of testCases) {
		const error = t.throws(() => boxPlot(...testCase))

		t.is(error.message, "Expected an array of numbers")
	}
})

test("Expected a number error", t => {
	// Each test case is an array to
	// be used as the only argument
	const testCases = [
		["42", "-15", 1, 2],
		["-15", "1", "2", "4"],
		[{ value: -15 }, { value: 1 }, { value: 2 }, { value: 4 }]
	]

	t.plan(testCases.length * 2)

	for (const testCase of testCases) {
		const error = t.throws(() => boxPlot(testCase))

		t.is(error.message, "Expected a number")
	}
})

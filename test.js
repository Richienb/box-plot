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
	const testCases = [
		[42],
		[-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25],
		[{ values: [-15, 1, 2, 4, 3, 5, 8, 6, 7, 9, 10, 25] }]
	]

	for (const testCase of testCases) {
		t.throws(() => boxPlot(...testCase), { message: "Expected an array of numbers" })
	}
})

test("Expected a number error", t => {
	const testCases = [
		["42", "-15", 1, 2],
		["-15", "1", "2", "4"],
		[{ value: -15 }, { value: 1 }, { value: 2 }, { value: 4 }]
	]

	for (const testCase of testCases) {
		t.throws(() => boxPlot(testCase), { message: "Expected a number" })
	}
})

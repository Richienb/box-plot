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

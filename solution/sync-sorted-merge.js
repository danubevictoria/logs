'use strict'

module.exports = (logSources, printer) => {
	let sorted = [];

	for (let i = 0; i < logSources.length; i++) {
		let source = logSources[i];
		let logEntry = source.pop();
		sorted.push(logEntry);
	}

	sorted.sort(compare);

	for (let j = 0; j < sorted.length; j++) {
		let logEntry = sorted[j];
		printer.print(logEntry);
	}

	printer.done();
}

function compare(a, b) {
	return a.date - b.date;
}

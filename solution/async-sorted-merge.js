'use strict'

module.exports = (logSources, printer) => {
	let promises = [];

	for (let i = 0; i < logSources.length; i++) {
		let source = logSources[i];
		let promise = source.popAsync();
		promises.push(promise);
	}

	Promise.all(promises)
		.then(function(result) {
			result.sort(compare);
		})
		.catch(function() {
			return false;
		});

	for (let j = 0; j < promises.length; j++) {
		let logEntry = promises[j];
		printer.print(logEntry);
	}

	printer.done();
}

function compare(a, b) {
	return a.date - b.date;
}

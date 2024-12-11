const removeFromArray = function(...args) {
	let array = args[0];
	let toRemove = args;
	toRemove.shift();
	let len = array.length;
	for (i = 0; i < len; i++) {
		for (j=0; j < toRemove.length; j++) {
			if (array[i] === toRemove[j]) {
				array.splice(i, 1);
				i--; len--;
			}
		}
	}
	return array;
}

// Do not edit below this line
module.exports = removeFromArray;

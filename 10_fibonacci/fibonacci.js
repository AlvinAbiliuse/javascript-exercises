const fibonacci = function(n) {
	let nList = [0, 1]
	if (Number(n) >= 0) {
		for (i=2; i <= Number(n); i++) {
			nList.push(nList[i-1] + nList[i-2])
		}
	} else {
		return "OOPS"
	}
	return nList[Number(n)];
};

// Do not edit below this line
module.exports = fibonacci;

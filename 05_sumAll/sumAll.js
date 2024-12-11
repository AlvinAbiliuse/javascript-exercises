const sumAll = function(n1, n2) {
	let number = 0
	for (i in arguments) {
		if (typeof arguments[i] != "number" || arguments[i] < 0 ||
			arguments[i] % 1 != 0) {
			return "ERROR"
		}
	}
	if (n1 < n2) {
		 for (i = n1; i <= n2; i++) {
			 number+= i;
		}
	} else if (n2 < n1) {
		 for (i = n2; i <= n1; i++){
			 number+= i;
		}
	}
	return number;	
};

// Do not edit below this line
module.exports = sumAll;

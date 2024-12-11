const add = function(n1, n2) {
	return n1 + n2;	
};

const subtract = function(n1, n2) {
	return n1 - n2	
};

const sum = function(nList) {
	let sum = 0;
	for (i in nList) {
		sum+= nList[i];
	}
	return sum;	
};

const multiply = function(nList) {
	let multiply = nList[0];
	for (i=1; i < nList.length; i++) {
		multiply = multiply * nList[i];
	}
	return multiply;
};

const power = function(n1, n2) {
	return n1 ** n2;	
};

const factorial = function(n) {
	let factorial = 1;
	for (i=1; i <= n; i++) {
		factorial = factorial * i;
	}
	return factorial;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const repeatString = function(str, n) {
	let message = "";
	if (n < 0) return "ERROR";
	for (i=0; i < n; i++) message+= str;
	return message
};


// Do not edit below this line
module.exports = repeatString;

const leapYears = function(year) {
	if (year % 4 == 0) {
		if (year % 100 != 0 || year % 400 == 0) {
			console.log(true);
			return true;
		
		}
	}
	console.log(false);
	return false;
};

leapYears(1999);

// Do not edit below this line
module.exports = leapYears;

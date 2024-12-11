const findTheOldest = function(people) {
	let oldest;
	let age = 0;
	for (i in people) {
		if (people[i].yearOfDeath == undefined) {
			let year = new Date()
			people[i].yearOfDeath = year.getFullYear();
		}
		if ((people[i].yearOfDeath - people[i].yearOfBirth) > age){
			oldest = people[i]
			age = people[i].yearOfDeath - people[i].yearOfBirth
		}
	}
	return oldest
};

// Do not edit below this line
module.exports = findTheOldest;

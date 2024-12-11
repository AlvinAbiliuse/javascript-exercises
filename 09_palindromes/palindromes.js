const palindromes = function (word) {
	let wordString = "";
	for (i in word) {
		if (["!", ",", " ", "."].includes(word[i])) {
			continue;
		} else {
			wordString += word[i].toLowerCase()
		}
	}
	let reverseString = "";
	for (i = wordString.length - 1; i >= 0; i--) {
		console.log(i);
		reverseString += wordString[i].toLowerCase()
	}
	if (wordString == reverseString) {
		return true;
	} else {
		return false;
	}

};

// Do not edit below this line
module.exports = palindromes;

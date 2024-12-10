const reverseString = function(string) {
	let messageList = new Array();
	for (i in string){
		messageList.push(string[i]);
	}
	let message = "";
	l = messageList.length - 1;
	for (i=l; i >= 0; i--) {
		message+= messageList[i];
	}
	return message;
};

// Do not edit below this line
module.exports = reverseString;

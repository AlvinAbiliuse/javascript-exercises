const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(books) {
	let tempArray = new Array();
	for (i in books) {
		tempArray.push(books[i].title);
	}
	return tempArray;
};

// Do not edit below this line
module.exports = getTheTitles;

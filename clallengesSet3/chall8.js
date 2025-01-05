// Write a function that takes a number and an array, checks if the number exists in the array, and returns a messege "Found" or "Not Found".

function checkNumInArray(number, array) {
	if (array.includes(number)) {
		return "Found";
	} else {
		return "Not Found";
	}
}

const number = 4;
const array = [1, 2, 3, 4, 5];

const result = checkNumInArray(number, array);
console.log(result);
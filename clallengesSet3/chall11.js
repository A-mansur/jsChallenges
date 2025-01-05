// Write a program that filters out all numbers greater than 10 from an array and returns the result.

function filterNumbers(array) {
	return array.filter(num => num <= 10);
}

const numbers = [2, 4, 15, 8, 6, 78, 10, 20, 85];
const filteredNumbers = filterNumbers(numbers);

console.log(filteredNumbers);
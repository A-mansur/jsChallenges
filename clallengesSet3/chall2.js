// Create a function sumArray that takes an array of numbers and returns their sum.

function sumArray(numbers) {
	let sum = 0;
	
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	
	return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 10, 10, 10, 10]));
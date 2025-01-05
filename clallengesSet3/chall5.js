//  Write a function findMax that returns the largest number from an array of numbers.

function findMax(numbers) {
	let max = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > max) {
			max = numbers[i];
		}
	}
	return max;
}

console.log(findMax([3, 5, 7, 2, 8])); // Output: 8
// Create a function that removes duplicate values from an array.
// Example input: [1, 2, 2, 3]. Output: [1, 2, 3].

function removeDuplicates(array) {
	return [...new Set(array)];
}

const inputArray = [1, 2, 2, 3];
const outputArray = removeDuplicates(inputArray);

console.log(outputArray); 
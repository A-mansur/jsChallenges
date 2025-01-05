// Check if the number 5 exists in the array[1, 2, 3, 4, 5] using the includes() method.

let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(5));

// Here's a customized version of the above code.

/*

let continueGuessing = true; 

while (continueGuessing) {
	const numberFromPrompt = prompt("Guess a number from 1 to 10 to check if it exists in the  array: ");
	const array = [2, 3, 5, 7, 9]; // Define the array
	const exists = array.includes(Number(numberFromPrompt));
	
	if (exists) {
		console.log(`Does the number ${numberFromPrompt} exist in the array? Yes ${numberFromPrompt} exists`);
		break;
	} else {
		console.log(`Does the number ${numberFromPrompt} exist in the array? No ${numberFromPrompt} does not exist`);
		
		const tryAgain = prompt("Would you like to guess another number? (yes/no): ").toLowerCase();
		if (tryAgain !== 'yes') {
			continueGuessing = false;
		}
	}
}

*/
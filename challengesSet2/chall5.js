// Write a while loop to print the first 5 multiples of 3.

let count = 1; // Initialize a counter to keep track of how many multiples have been printed
let multiple = 3; // Set the first multiple of 3

while (count <= 5) { // Continue the loop until we have printed 5 multiples
	console.log(multiple); // Print the current multiple of 3
	multiple += 3; // Increment the multiple by 3 to get the next multiple
	count++; // Increment the counter to track how many multiples have been printed
}
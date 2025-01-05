// Use a for loop to calculate the factorial of a number n

function factorial(n) {
	let result = 1;
	
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	
	return result;
}

console.log(factorial(5));
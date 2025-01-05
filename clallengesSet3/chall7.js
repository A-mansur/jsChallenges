// Write a function that reverses a string, eg., "hello" to "olleh".

function reverseString(str) {
	return str.split("").reverse().join("");
}

const initialString = "hello";
const reversedString = reverseString(initialString);
console.log(reversedString);
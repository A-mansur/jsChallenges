// Write a program that counts how many times the letter "a" appears in the string "JavaScript is amazing!".

const str = "JavaScript is amazing!";
let count = 0;

for (let i = 0; i < str.length; i++) {
	if (str[i].toLowerCase() === "a") {
		count++;
	}
}

console.log(`The letter "a" appears ${count} tiems.`);
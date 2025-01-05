// Write a loop to log all key-value pairs of the object{a:1, b:2, c:3}

const obj = {a: 1, b: 2, c: 3};

for (const key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(`Key: ${key}, Value: ${obj[key]}`);
	}
}

/*

Explanation of Each Line

const obj = { a: 1, b: 2, c: 3 };: This line defines an object obj with three key-value pairs.

for (const key in obj) {: This starts a for...in loop that iterates over each key in the object.

if (obj.hasOwnProperty(key)) {: This checks if the key is a direct property of the object (not inherited from the prototype chain).

console.log(Key: key, Value:key,Value:{obj[key]});: Inside the loop, this line logs the current key and its corresponding value to the console.

*/

// This challenge was a bit tricky so I decide to go through AI to understand it.
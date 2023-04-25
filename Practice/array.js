const myArray = [1, 2, 3, 4, 5];

myArray.push(6); // Add an element to the end of the array
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

myArray.pop(); // Remove the last element from the array
console.log(myArray); // Output: [1, 2, 3, 4, 5]

myArray.splice(2, 1, 10); // Remove one element at index 2 and insert 10
console.log(myArray[2]); // Output: [1, 2, 10, 4, 5]

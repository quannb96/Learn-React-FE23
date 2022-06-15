const max = Math.max(1, 2, 5);
const max2 = Math.max([1, 3, 5]);
console.log(max);

const maxInArray = Math.max(...[1, 2, 5]);

const arr = [1, 2, 3];
const arr2 = [4, 5];
const updatedArr = [...arr, ...arr2];
console.log(updatedArr);

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const updatedObj = { ...obj1, ...obj2 };

console.log(updatedObj);

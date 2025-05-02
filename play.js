const numbers = [1,2,3,4,5,6,7,8,9,10];
let [first, second, ...third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // [3, 4, 5, 6, 7, 8, 9, 10]
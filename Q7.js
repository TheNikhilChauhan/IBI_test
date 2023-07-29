const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, num) => [num, ...acc], []);

console.log(reversedArr);

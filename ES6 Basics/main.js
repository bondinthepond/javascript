// const nums = [1, 2, 3, 4];

// var newNum = nums.map(num => num + 1);

// console.log(newNum);

// newNum.forEach(num => console.log(num + 1));

var map1 = new Map();

map1.set("name", "aditya");
map1.set("age", 30);
map1.set("company", "quotient");

console.log(map1);

console.log(map1.get("name"));

var keys = [];
map1.forEach(key => keys.push(key));

console.log(keys);

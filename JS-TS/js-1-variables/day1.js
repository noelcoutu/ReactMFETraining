console.log("Hello, World!");

const balance = 1000;

let mutableBalance = 1000;
mutableBalance = 20000;

console.log(mutableBalance);

let deposit = prompt("deposit amount");
console.log("your new balance is: ", mutableBalance + +deposit);

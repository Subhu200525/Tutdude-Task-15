const array = [4,8,2,11];
console.log("Array:-",array); 

// maximum number
const max = array.reduce((a, b) => {
    return a > b ? a : b;
});

console.log("Maximum Number:-",max);


// sum of all Element
let sum = array.reduce(function(a, b) {
    return a + b;
},0);
console.log("Sum of all element:-",sum);

// count of odd number
let oddCount = array.filter(function(num) {
    return num % 2 !== 0;
}).length;

console.log("count of odd number:-",oddCount);
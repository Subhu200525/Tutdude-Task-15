# Task 15 — Array and Function

## 📌 Description

This task demonstrates basic JavaScript array operations using **`reduce()`**, **`filter()`**, and **anonymous/arrow functions**.

The program performs three operations on an array:

1. Finds the maximum number.
2. Calculates the sum of all elements.
3. Counts the number of odd elements.

---

## 🛠️ Technologies Used

* JavaScript
* Array Methods

  * `reduce()`
  * `filter()`
* Arrow Function
* Anonymous Function

---

## 📂 Code

```javascript
const array = [4, 8, 2, 11];

console.log("Array:-", array);

// maximum number
const max = array.reduce((a, b) => {
    return a > b ? a : b;
});

console.log("Maximum Number:-", max);

// sum of all Element
let sum = array.reduce(function(a, b) {
    return a + b;
}, 0);

console.log("Sum of all element:-", sum);

// count of odd number
let oddCount = array.filter(function(num) {
    return num % 2 !== 0;
}).length;

console.log("count of odd number:-", oddCount);
```

---

## 📊 Output

```text
Array:- [4, 8, 2, 11]

Maximum Number:- 11

Sum of all element:- 25

count of odd number:- 1
```

---

## 🧠 Concepts Used

### 1. `reduce()`

The first `reduce()` finds the maximum number:

```javascript
const max = array.reduce((a, b) => {
    return a > b ? a : b;
});
```

The second `reduce()` calculates the sum:

```javascript
let sum = array.reduce(function(a, b) {
    return a + b;
}, 0);
```

### 2. `filter()`

`filter()` is used to select the odd numbers:

```javascript
array.filter(function(num) {
    return num % 2 !== 0;
});
```

`.length` is then used to count the filtered elements.

---

## 📁 Project Structure

```text
Task-15/
│
├── index.js
└── README.md
```

---

## ▶️ How to Run

1. Save the JavaScript code in a file named `index.js`.
2. Open the project folder in VS Code.
3. Run the file using Node.js:

```bash
node index.js
```

You can also run the code in the browser console.

---

## 🎯 Learning Outcome

After completing this task, I learned how to:

* Work with JavaScript arrays.
* Find the maximum value using `reduce()`.
* Calculate the sum of array elements.
* Count odd numbers using `filter()`.
* Use arrow functions.
* Use anonymous functions.
* Use the `.length` property to count elements.

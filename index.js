//? November 4

//* Task-1
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// var result = array1.concat(array2);

// console.log("result:", result);

//* Task-2
// var list = [1,2,3,[4],[5],6,[7]]
// var result = list.flat(1)

// console.log(result);

//* Task-3
// var list1 = [7, 9, 0, -2]
// var list2 = [[1],3]
// var result1 = list1.slice(0,1)
// var result2 = list2.slice(0,1)

// console.log(result1);
// console.log(result2);

//* Task-4
// var list = [9,9,9,4,6,2];
// var result = list.join("-");

// console.log(result);

//* Task-5/6
// var student_list =["John","Marry","Ali","Sophia"]
// var studentName = "John"
// var result = (studentName + " is a student")

// console.log(result);
// console.log(studentName + " has been added to the student list.");

//* Task-7
// let array = [1, 2, 3, 4, 5];
// let result= array.reverse();

// console.log(result);

//* Task-8
// let array = [[1, 2], [3, 4], [5, 6]];
// let result= array.flat(1);

// console.log(result);

//* Task-9
// var list = ["John", "Katy", "Simpson"];
// var lastStudent = list.length - 1;
// var result = list[lastStudent];
// var result2 = result + " is last student in the class";

// console.log(result2);

//* Task-10
// var list = [1, 2, 3, 4, 5, 2];
// var result = list.splice(1, 1);

// console.log(result);

//^ ------------------------------------------------------

//? November 7

//* Task-1
// var fruit = "banana";
// var result = fruit.length;

// console.log(result);

//* Task-2
// var elementCount = 4;
// var element = 11;
// var result = Array(elementCount).fill(element);

// console.log(result);

//* Task-3
// let text = "javascript";
// let result = text.replace("j", "J");

// console.log(result);

//* Task-4
// let fullName = "john doe";
// let result = fullName.toUpperCase();

// console.log(result);

//* Task-5
// let weather = "Today is a sunny day";
// let result = weather.replace("sunny", "rainy");

// console.log(result);

//* Task-6
// let text = "JavaScript is a funny language";
// let result = text.split(" ");

// console.log(result);

//* Task-7
//! Menim versiyam sehv oldu (Bu mene tam catmadi)
// let fruits = ["Apple", "Banana", "Mango"];
// let newFruits = fruits.push("Orange");

// console.log(fruits);

// if (fruits.includes(newFruits)) {
//   console.log("axtardiginiz" + newFruits + "tapildi");
// } else {
//   console.log("axtardiginiz yoxdur");
// }
//! Chat GPT yazdi (Sohbeti tutmadim)
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange");  // Add "Orange" to the array

// console.log(fruits);

// let searchFruit = "Orange";  // The fruit you're searching for

// if (fruits.includes(searchFruit)) {
//   console.log("axtardiginiz " + searchFruit + " tapildi");
// } else {
//   console.log("axtardiginiz yoxdur");
// }

//* Task-8
// let firstNames = ["John", "Jane"];
// let lastNames = ["Doe", "Smith"];
// let fullNames = firstNames.concat(lastNames);
// fullNames.pop();
// fullNames.shift();

// console.log(fullNames);

//* Task-9
// let word = "JavaScript";
// let array = word.split("");
// result = array.reverse();
// result2 = result.join("");

// console.log(result2);

//* Task-10
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let result = fruits.indexOf("Banana");

// console.log(result);

//^ ------------------------------------------------------

//? November 11

//* Task-1
//^ Dede-baba usulu:
// let list = [1, 2, 3, 4];
// let total = 0;
// for (let i = 0; i < list.length; i++) {
//   total += list[i];
// }
// console.log("Task-1",total);

//^ For of usulu:
// let list = [1, 2, 3, 4];
// let total = 0;
// for (let el of list) {
//   total += el;
// }
// console.log("Task-1", total);

//* Task-2
//^ Birinci usul:
// let list = [1, 2, 3, 4, 5];
// let num = [1];
// for (let el of list) {
//   num *= el;
// }
// console.log("Task-2",num);

//^ Ikinci usul:
// let num = 1;
// for (let i = 1; i <= 5; i++) {
//   num *= i;
// }
// console.log(num);

//* Task-3
// let list = [3, 7, 2, 8, 5];
// let findMax = -Infinity;
// for (let i = 0; i < list.length; i++) {
//   let el = list[i];
//   if (findMax < el) {
//     findMax = el;
//   }
// }
// console.log("Task-3", findMax);

//* Task-4
// let a = "hello";
// let b = a.split("");
// let c = b.reverse();
// let d = c.join("");
// console.log(d);

//^ ------------------------------------------------------

//? November 14

//* Code wars-1
// function check(a, x) {
//   if (a.includes(x)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let result = check([66, 101], 66);
// console.log(result);

//* Code wars-2
// function reverseList(list) {
//   let a = list.reverse();
//   return a;
// }
// let b = reverseList([1, 2, 3, 4]);
// console.log(b);

//* Code wars-3
//?

//* Task-1
// function sumArray(num) {
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i];
//   }
//   return total;
// }
// console.log(sumArray([1, 2, 3, 4]));

//* Task-2
// function fact(a){
//     let el=1
//     for(let i=1;i<=a;i++){
//         el*=i
//     }
//     return el;
//  }
//  console.log(fact(5));

//* Task-3
// let list = [3, 7, 2, 8, 5];
// function findMax(num) {
//   let max = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (max < num[i]) {
//       max = num[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(list));

//* Task-4
// let string = reverseString("hello");

// function reverseString(inputString) {
//   return inputString.split("").reverse().join("");
// }
// console.log(string);

//^ ------------------------------------------------------

//? November 18

//* Task-1
// function countVowels(arr) {
//   const vowels = "a,ı,o,u,e,ə,i,ö,ü";
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.includes(arr[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("javascript"));

//* Task-2
// function printEvens(num) {
//   let evens = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   return evens;
// }
// printEvens(10);

//* Task-3
// function sumDigits(num) {
//   let sum = 0;
//   let digit = num.toString();
//   for (let i = 0; i < digit.length; i++) {
//     sum += +digit[i];
//   }
//   return sum;
// }
// console.log(sumDigits(123));

//* Task-4
// function multiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${num} = ${num * i}`);
//   }
// }
// multiplicationTable(3);

//* Task-5
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

//^ ------------------------------------------------------

// ? November 21

//* Task-1
// function numbers(number) {
//   console.log(number);
// }
// function performOperation(number, callback) {
//   callback(number);
// }
// performOperation(15, numbers);

//* Task-2
// function transformArray(arr, callback) {
//   return arr.map(callback);
// }
// function multiplyByTwo(num) {
//   return num * 2;
// }
// const numbers = [1, 2, 3];
// const transformedArray = transformArray(numbers, multiplyByTwo);
// console.log(transformedArray);

//* Task-3
// function filterArray(arr, callback) {
//     return arr.filter(callback);
//   }
//   function isEven(num) {
//     return num % 2 == 0;
//   }
//   const numbers = [1, 2, 3, 4];
//   const filteredArray = filterArray(numbers, isEven);
//   console.log(filteredArray);

//^ ------------------------------------------------------

// ? November 25

//* Task-1
// let inputArray = [1, 2, 3, 4, 5, 6];
// console.log(
//   inputArray.filter(function (el) {
//     return el % 2 == 0;
//   })
// );

//* Task-2
// let inputArray = [1, 2, 3, 4, 5, 6];
// console.log(
//   inputArray.filter(function (el) {
//     return !(el % 2 == 0);
//   })
// );

//* Task-3
// let inputArray = [1, 2, 2, 3, 4, 4, 5];
// const newArr = [];
// inputArray.forEach((item) => {
//   if (!newArr.includes(item)) {
//     newArr.push(item);
//   }
// });
// console.log(newArr);

//^ ------------------------------------------------------

// ? November 28

//* Task-1
// function greet() {
//   let name = "taleh";
//   function outer(n) {
//     n = name;
//     return n;
//   }
//   return outer();
// }
// console.log(greet());

//* Task-2
// function greet(name) {
//   function outer() {
//     let a = `hello ${name}`;
//     return a;
//   }
//   return outer();
// }
// console.log(greet("taleh"));

//* Task-3
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter = createCounter();
// console.log(counter());

//* Task-4

//* Task-5

//^ ------------------------------------------------------

// ? December 2

//* Task-1

/* Q1. Distribute the k candies among n children sitting in a circle.
Starting from ith index find the index of last student recieveing the candy.

n -> no of children
k - no of candies
s - start postion */

// Solution - 

// const findLastKid = (n, k, s) => {
//     const newK = k%n;
//     return (s-1+newK)%n;
// }

// const res = findLastKid(3,5,2);
// console.log(res);

// -----------------------------------------------
/* Q2. Given an array A of size N, find out the element which is appearing more than ceil(N/2) times in the given array.

Example:
N - 5
A - [2, 2, 3, 2, 3]

Output - 2 */

// Solution - 

// const arr = [2, 2, 3, 2, 3]
// let halfValue = Math.ceil(arr.length/2)
// console.log(halfValue)
// const obj = {};
// arr.forEach((val)=>{
//     if((val in obj)) {
//         obj[val]+=1;
//         return;
//     }
//     obj[val]=1;
// })
// check for frequent array items
// const frequentValues = [];
// for(key in obj) {
//     if(obj[key] >= halfValue) frequentValues.push(key);
// }
// console.log(frequentValues)

// more syntactic way to check for frequent items using filter
// const frequentValues = Object.keys(obj).filter((key, index)=> obj[key]>=halfValue)
// console.log(frequentValues);

// ---------------------------------------------------------------------------

/* Q3. Given an Array A and a number N, find the pair of numbers in Array whose sum is equal to N.

Example:
A - [ 1, 5, 2, 6, 8, 9, 10]
N - 7

    Output - [1, 6], [5, 2], [2, 5], [6, 1]

assumption - all numbers are unique */

// Solution - 

// const arr = [ 1, 5, 2, 6, 8, 9, 10]
// const sum = 7;
// const obj = {}
// arr.forEach((val, index)=> {
//     if(!(val in obj)) obj[val] = true; // look ups are O(1)
//     if((sum-val in obj)) {
//         console.log("Pair found", "[" , val, ", ", sum-val, "]")
//     }
// })

// -------------------------------------------------------------------------

/* Q4. Given a multi-dimensional array with indefinite nesting, write a function to flatten the elements of the array.

Input: [1, 2, [3]]
Output: [1, 2, 3]

Input : [[1, 2, [3]], 4]
Output : [1, 2, 3, 4]

Input: [1, 2, [3, [4, 5]]]
Output: [1, 2, 3, 4, 5] */

// Solution - 

// const arr = [1, 2, [3, [4, [5]]]]
// const flattenArray = []
// const flatten = (arr) => {
//     arr.forEach(element => {
//         // check if element is number or an array
//         if(Array.isArray(element)) {
//             flatten(element)
//             return; 
//         }
//         flattenArray.push(element);
//     });
// }

// flatten(arr, flattenArray);
// console.log(flattenArray)

// ------------------------------------------------------------------------

/* Q5. Implement an adder function in such a way, it always returns a function. 
    When we supply any parameter N to returned function, it will add N to the existing sum. 
    But when we do not pass any parameter, it returns the accumulated sum.

Example: 
add(1)(2)(3)()  // 6
add(1)(3)(4)(5)(6)() // 19 */

// Solution - 

// const add = (m) => {
//     return (n) => {
//         if(n) return add(m+n)
//         return m;
//     }
// }
// console.log(add(1)(2)(3)());

// OR
// shorter form to write the same function will be:-

// const add = a => b => b ? add(a+b) : a;
// console.log(add(1)(2)(3)());

// -----------------------------------------------------------------------------

/* Q6. Given an input string that can contain different kinds of braces, find if the string is balanced or not. A balanced string is one which has all the brackets opening and closing in the correct order.


Input: exp = "[()]{}{[()()]()}"
Output: Balanced

Input: exp = "[(])"
Output: Not Balanced */

// Solution - 

// const str = "[()]{}{[()()]()}"

// const checkBalance = (str) => {
//     const balancedStack = [];
//     for(let i=0;i<str.length;i++) {
//         if(balancedStack.length !==0) {
//             balancedStack
//         }
//     }
// }

// -----------------------------------------------------------------------------

/* Q7. Write a function that can accept any number of arguments (number) and
returns the sum of all the numbers.

Example:
add(1, 2, 3, 4, 5) // 15
add(1, 2) // 3
add(1, 2, 3) // 6  */

// Solution - 

// const add = (...args) => {
//     let sum = 0;
//     console.log(args);
//     args.forEach(element => {
//         sum+=element
//     });
//     return sum;
// }


// console.log(add(1, 2, 3, 0))

// ---------------------------------------------------------------------

// Q8. What is the output of the below snippet?

// function foo() {
//  var a;
//   if (true) {
// 	var a = 'hello';
//     console.log(a);
//   }
// 	console.log(a);
//  }

// foo();
// Answer - undefined

// ------------------------------------------------------------------------------
// Q9. Write the curry function for the below sum function

// function sum(a, b, c) {
//     return a + b + c;
// }

// currying with bind method:-
// const twoAdder = sum.bind(this, 2);
// const res = twoAdder(3,4);
// console.log(res);

// curry with closures
// const twoAdder = (a) => {
//     return (b, c) => {
//         return a + b + c;
//     }
// }
// const res = twoAdder(2)(3,4);
// console.log(res);

// curriedFn(1, 2, 3);            // 6
// var curry = (sum) => {
//     return sum;
// }

// var curriedFn = curry(sum);
// const res = curriedFn(1,2,3)
// console.log(res);

// curriedFn(1)(2, 3);            // 6
// const curry = (sum) => {
//     return (a)=>{
//         return (b,c) => {
//             return sum(a,b,c)
//         }
//     }
// }
// var curriedFn = curry(sum);
// const res = curriedFn(1)(2,3)
// console.log(res);

// curriedFn(1)(2)(3);            // 6

// const curry = sum => {
//     let sum = 0;
//     return (n) => {
//         return(m) => {
//             return (k) => {
//                 sum(n,m,k)
//             }
//         }
//     }
// }
// var curriedFn = curry(sum);
// const res = curriedFn(1)(2)(3);


// Write a poly fill for filter

const arr = [1,2,3];

const filter = (callback) => {
    const newArr = [];
    console.log("Hello", this);
    for(let i=0; this.length; i++) {
        if(callback(this[i], i, this)) newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

// attach this polyfill filter function to the prototype of arr
// if(!(arr.__proto__.filter)) {
arr.__proto__.newfilter = filter;
// }

console.log(arr.newfilter((num)=>num>=2));
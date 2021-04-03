// const p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 3) resolve(a);
//     else reject(a)
// });

// p.catch(message => {
//     console.log(message);
// })


const promiseOne = new Promise(function(resolve, reject) {
    resolve('This is promise One');
});

const promiseTwo = new Promise(function(resolve, reject) {
    resolve('This is promise two');
});

const promiseThree = new Promise(function(resolve, reject) {
    resolve('This is promise three');
});

/* Promise.all runs multiple promises at same time 
and only executes .then once all the promises are completed */
Promise.all([promiseOne, promiseTwo, promiseThree])
.then((messages) => {console.log(messages)})


/* Promise.race runs only one of the promise which completes fastest */
Promise.race([promiseTwo, promiseOne, promiseThree])
.then(message=>{console.log(message)})



/* Writing callbacks in Promise.all in one line */

// Promise.all([new Promise(resolve => {
//     resolve("Hello one!")
// }), new Promise(resolve => {resolve("Hello two!")})])
// .then(messages=>{console.log(messages)})
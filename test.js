// for (var i = 1; i < 5; i++) {
//     setTimeout(function(){
//            console.log(i)
//    }, 1000)
// }

// Q6.
//  console.log(["1", "2", "3"].map(parseInt)) // [ 1, NaN, NaN ]

// Q11.
// var result = (function(x){
//     delete x;
//     return x;
// })(0);
// console.log(result);

// Q12.
// function testHack()
//     {
//         var test = [];
//         for(var z=0;z<5;z++)
//             test[z] = function() {return z;};
//         return test;
//     }
// var test = testHack();
// console.log(test[0]());

// Q13.
// var x = 4,
//     obj = {
//         x: 3,
//         bar: function() {
//             var x = 2;
//             setTimeout(function() {
//                 var x = 1;
//                 console.log(this.x);
//             }, 1000);
//         }
//     };
// obj.bar();

// Q14.
// function bar(){
//     return foo;
//     foo=10;
//     function foo() {}
//     var foo = 11;
// }
// console.log(typeof bar());

// Extra question -
// function foo(a) {
//     arguments[0] = 2;
//     console.log(a);
//   }
//   foo(1);

// Given an array of numbers return the unique pairs of a sum
// const arr = [7, -1, 3, 5, 2, 6, null, undefined, NaN, 12, 0, 5, "Hello", "hi"];
// const targetSum = 5;

// const obj = {};
// const pairs = new Set();

// for (let i=0;i<arr.length;i++) {
//     // null check logic - ignore non-numbers and NaN values
//     if(typeof arr[i] !== "number" || Number.isNaN(arr[i])) continue;
//     // main logic starts below
//     if(obj[targetSum-arr[i]] !== undefined) {
//         pairs.add(targetSum-arr[i]);
//         pairs.add(arr[i]);
//     }
//     obj[arr[i]] = i;
// }
// console.log(pairs);





var person  = {firstName: "Prajjwal", profession: {desg: "SDE"}};

function deepCopy(obj) {
	if(obj === undefined) return;
	const newObj = {};
  Object.keys(obj).forEach(key => {
  	/* if(typeof obj[key] === "object") {
  	      console.log("here");
  	      newObj[key] = deepCopy(obj[key]) || null;
  	      
  	    }
  	    else { */
    	newObj[key] = obj[key];
    //}
  })
  return newObj;
}

console.log(deepCopy(person) === person); // false
cosole.log(deepCopy(person).profession === person.profession); // false
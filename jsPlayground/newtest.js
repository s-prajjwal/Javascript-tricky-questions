// var person  = {firstName: "Prajjwal", profession: {desg: "SDE", address: {street: "123"}}};

// function deepCopy(obj) {
// 	if(obj === undefined) return;
// 	const newObj = {};
//   Object.keys(obj).forEach(key => {
//   	if(typeof obj[key] === "object") {
//   	      newObj[key] = deepCopy(obj[key]) || null;
//   	    }
//   	    else {
//     	newObj[key] = obj[key];
//     }
//   })
//   return newObj;
// }

// const newPerson = deepCopy(person);
// person.profession.desg = "SSE";


// console.log(newPerson.profession.desg); // SDE
// console.log(person.profession.desg); // SSE


// var test = 1;
// function functionHoisting() {
// // console.log(test);
//   let test = 10;
//   return;
// function test() {}
// }
// functionHoisting();
// console.log(test);

// var x = 21; 
// var girl = function () { 
//     console.log(x);  
//     var x = 20; // x: undefined
// }; 
// girl (); 


// let y;
// var x;
// x = 10;
// console.log(x); // 
// let x = 100
// console.log(x); //
// var y = 1000;
// console.log(y); //

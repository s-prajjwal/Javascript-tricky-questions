// (function(){
//     try {
//         throw new Error();
//     } catch(x) {
//         var x=10,y=5;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);

// })();

// (function(){
//     var a=10;
//     console.log(a);
// })();

// var ab = () => {
//     var a=10;
//     console.log(a);
// }

// function ac(){
//     var a=5;
//     console.log(a);
// }

// ab();
// ac();

// var b = 10;
// {
//     var a = 5;
//     console.log(a);
// }
// console.log(a);

const obj = {
    a: "abc",
    getName: ()=> {
        console.log(this);
    }
}

obj.getName();

// function arrowClosure() {
//     // console.log("here");
//     return function(){
//         console.log("Here", this);
//     }
// }

// arrowClosure()();

// const rty = () => {
//     console.log(this);
// }

// rty();

// const normal = () => {
//     console.log(this);
// }
// normal();
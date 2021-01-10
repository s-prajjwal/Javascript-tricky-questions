// const bindedFunction =  someFunction.bind(someContex, ...arguments);

const person = {
    firstName: "Prajjwal",
    lastName: "Singh"
}

const printNameFunc = function (...args) {
    console.log(this.firstName + " " + this.lastName);
    args.forEach(function (arg){
        console.log(arg);
    })
}

const printMyName = printNameFunc.bind(person, "Prayagraj");
printMyName("Uttar Pradesh");

const mybind = function (...args) {
    const context = args[0];
    // const params = args.filter((_,index) => index!== 0 );
    const params = args.slice(1);
    const func = this;
    return function () {
        func.apply(context, [...params, ...arguments]);
    }

}

Function.prototype.mybind = mybind;

const printMyName2 = printNameFunc.mybind(person, "Prayagraj");
printMyName2("Uttar Pradesh"); // should return same out put as printMyName function
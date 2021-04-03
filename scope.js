class Abc {
    constructor(){
        this.name = "Prajjwal";
    }

    printName = () => {
        console.log("This is printNsme", this.name);
        function innerPrintName () {
            console.log('This is inner print name', this.name);
        }
        innerPrintName();
    }
}

const obj = new Abc();
// console.log(obj.name);
obj.printName();
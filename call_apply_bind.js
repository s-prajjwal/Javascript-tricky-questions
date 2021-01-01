const person = {
    firstName: "Prajjwal",
    lastName: "Singh",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

const person2 = {
    firstName: "Prakhar",
    lastName: "Singh",
}

person.printFullName(); // Prajjwal Singh
person.printFullName.call(person2); // Prakhar Singh
// person2.printFullName(); // Uncaught TypeError: person2.printFullName is not a function


const newPrintFullName = person.printFullName.bind(person2);
newPrintFullName();


// Examples with arguments

const person3 = {
    firstName: "John",
    lastName: "Mathew",
    city: "New York",
    printIntro: function(city=this.city) {
        console.log(`I am ${this.firstName} ${this.lastName} from ${city}`)
    }
}

person3.printIntro(); // I am John Mathew from New York 
person3.printIntro.call(person2, "Prayagraj"); // I am Prakhar Singh from Prayagraj
// person3.printIntro.apply(person, "Prayagraj"); // Uncaught TypeError: CreateListFromArrayLike called on non-object
person3.printIntro.apply(person, ["Allahabad"]);  // I am Prajjwal Singh from Allahabad

const newPrintIntro = person3.printIntro.bind(person2, "Fatehpur"); // I am Prakhar Singh from Fatehpur
newPrintIntro();

// Attach the newPrintIntro function to person object

person.printIntro = person3.printIntro.bind(person, "Hyderabad"); // I am Prajjwal Singh from Hyderabad
person.printIntro();
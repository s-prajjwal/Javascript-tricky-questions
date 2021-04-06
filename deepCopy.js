const obj = {
	firstName: "Prajjwal",
  address : {
  	street: "ABC",
    city: "Hyderabad",
  }
}

const newObj = {};

function deepCopy(obj, newObj) {
// if obj is object or otherwise
  Object.keys(obj).forEach(key => {
      if(typeof obj[key] == "object") {
        tempObj = {};
        deepCopy(obj[key], tempObj);
        newObj[key] = tempObj;
      }
    // if its a primitive type
    newObj[key] = obj[key];
  })  
}

deepCopy(obj, newObj);
console.log(newObj);

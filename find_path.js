let obj = {
    a: {
        b: 1
    },
    c: {
        d: {
            e: 2
        }
    }
}

function findPath(str) {
    // some corner cases if conditions
    if (typeof str !== "string" && !str) return "Not a valid input!" ;
    // main logic
    const strArr = str.length>0 ? str.split('.'): [];
    let res = this;
    for (let i = 0; i < strArr.length; i++) {
        const key = strArr[i];  
        if (res[key]) res = res[key];
        else return undefined;
    }
    return res;
}


Object.prototype.findPath = findPath;

console.log(obj.findPath("csdcskdjbkb"));

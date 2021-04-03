function throttle(callback, timeLimit){
    // flag to check free state
    let isFree = true;
    return function(a,b) {
        if(isFree) {
            isFree = false;
            callback(a,b);
            setTimeout(function(){isFree = true}, timeLimit);
        } 
        else return; 
    }
}

const throttleFunc = throttle(sum, 200);

for(let i=1;i<50;i++) {
    setTimeout(throttleFunc(1,2), i*10);
}

function sum(a,b) {
    console.log("Sum is - ", a+b);
}
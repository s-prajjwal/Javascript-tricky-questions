function debounce(callback, timeLimit) {
    let timer;
    return function () {
        clearTimeout(timer);
        let [context, args] = [this, arguments];
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, timeLimit);
    }
}

const debounceFunc = debounce(printGreeting, 200);

for (let i = 1; i <= 10; i++) {
    setTimeout(debounceFunc(), i * 300);
}

function printGreeting() {
    console.log("Hello there!");
}
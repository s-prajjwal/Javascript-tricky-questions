/* Given an array A of size N, find out the element which is appearing more than ceil(N/2) times in the given array.

Example:
N - 5
A - [2, 2, 3, 2, 3]

Output - 2 */


function maxFreq(arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 0;
        map[arr[i]] += 1;
    }
    let res = []
    const n = Math.ceil(arr.length/2);
    for(let key in map) {
        if(map[key] >= n) res.push(key);
    }
    console.log(res);
}

let arr = [2,2,3,2,3];
maxFreq(arr);
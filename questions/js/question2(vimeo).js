/* Q- A sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique. */

function findNumber(arr, start, end) {
    // console.log("I am here", start, end);
    if (start > end) return -1;
    const mid = (start + end) / 2;
    // console.log("mid is - ", mid);
    if (arr[mid] === number) return mid;
    else {
        if (arr[start] <= arr[mid]) {
            if (number >= arr[start] && number <= arr[mid]) {
                return findNumber(arr, start, mid);
            }
        }
        if (number >= arr[mid + 1] && number <= arr[end]) {
            return findNumber(arr, mid + 1, end);
        }
    }
    return findNumber(arr, start, mid - 1);
}

const arr = [13, 18, 25, 2, 8, 10] // 8
const number = 8;
const result = findNumber(arr, 0, arr.length);
console.log(result);

import { readFileSync } from 'fs';

const file = readFileSync('src/input/day1.txt').toString().split('\n');

const numbers = file.map(num => parseInt(num, 10));
let increasedTimes = 0;
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i-1] < numbers[i]) {
        increasedTimes += 1;
    }
}
function sum(...numbers: number[]): number {
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    })
}

let increasedSlidingWindow = 0;
for(let i = 0; i < numbers.length-4; i++) {
    const totalA = sum(...numbers.slice(i, i + 3))
    const totalB = sum(...numbers.slice(i+1, i + 4))
    if(totalA < totalB) {
        increasedSlidingWindow += 1;
    }
}


export {
    increasedTimes,
    increasedSlidingWindow
}

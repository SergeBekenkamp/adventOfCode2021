import { readFileSync } from 'fs';

const file = readFileSync('src/input/day3.txt').toString().split('\n');

const lineLength = file[0].length;
let gammaRate = '';
let epsilonRate = '';
let oxygen = '';
let scrubber = '';

function getSplitArray(arr: string[], line: number) {
    let zeroArr: string[] = [];
    let oneArr: string[] = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x][line] === '0') {
            zeroArr.push(arr[x])
        } else {
            oneArr.push(arr[x])
        }
    }


    return {
        zeroArr,
        oneArr,
    }
}

for(let i = 0; i < lineLength; i++) {
    const {zeroArr} = getSplitArray(file, i);
    if(zeroArr.length < (file.length / 2)) {
        gammaRate += '1'
        epsilonRate += '0'
    } else {
        gammaRate += '0'
        epsilonRate += '1'
    }
}
// oxygen
for(let i = 0; i < lineLength; i++) {
    const {zeroArr, oneArr} = getSplitArray(file, i);
    if(zeroArr.length < (file.length / 2)) {
        oxygen += '1'

    } else {
        gammaRate += '0'
        epsilonRate += '1'
    }
}



const power_consumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);



export {
    power_consumption
};

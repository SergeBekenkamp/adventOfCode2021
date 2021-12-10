import { readFileSync } from 'fs';
type Direction = 'forward' | 'up' | 'down';
type Command = [Direction, number]
const inputs = readFileSync('src/input/day2.txt').toString().split('\n');

const commands = inputs.map(input => {
    const [direction, amount] = input.split(' ');
    return [direction, parseInt(amount, 10)];
}) as Command[];

function calculateCommandsPart1(input: Command[]) {
    let horizontal = 0, depth = 0;

    input.forEach(([direction, amount]) => {
        switch(direction) {
            case 'forward': {
                horizontal += amount;
                break;
            }
            case 'up': {
                depth -= amount
                break;
            }
            case 'down': {
                depth += amount
                break;
            }
        }
    })

    return horizontal * depth;
}

function calculateCommandsPart2(input: Command[]) {
    let horizontal = 0, depth = 0, aim = 0;

    input.forEach(([direction, amount]) => {
        switch(direction) {
            case 'forward': {
                horizontal += amount;
                depth += aim * amount;
                break;
            }
            case 'up': {
                aim -= amount;
                break;
            }
            case 'down': {
                aim += amount;
                break;
            }
        }
    })

    return horizontal * depth;
}

const part1 = calculateCommandsPart1(commands);
const part2 = calculateCommandsPart2(commands);

export {
    part1,
    part2
}

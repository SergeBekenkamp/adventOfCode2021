const finishedDays = 3;
for(let i = 1; i <= finishedDays; i++) {
    const day = require(`./day${i}`);
    //import * as day from `./day${i}`;
    console.log(`day ${i}:`, day);

}

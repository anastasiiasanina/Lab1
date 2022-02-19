const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let a = 0;
let b = 0;
let c = 0;

const solve = (a, b, c) => {
    const dis = Math.pow(b, 2) - 4 * a * c;
    if (dis > 0) {
        let x1 = (-b + Math.sqrt(dis)) / (2 * a);
        let x2 = (-b - Math.sqrt(dis)) / (2 * a);
        console.log(`Equation is: (${a}.0) x^2 + (${b}.0) x + (${c}.0) = 0`);
        console.log("There are 2 roots");
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    } else if (dis === 0) {
        let x = -b / (2 * a);
        console.log(`Equation is: (${a}.0) x^2 + (${b}.0) x + (${c}.0) = 0`);
        console.log("There is 1 root");
        console.log(`x = ${x}`);
    } else if (dis < 0) {
        console.log(`Equation is: (${a}.0) x^2 + (${b}.0) x + (${c}.0) = 0`);
        console.log("No roots.Negative discriminant");
    }
}
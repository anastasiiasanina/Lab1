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

const intro = (message, enterData) => {
    rl.question(message, enterData);
}

const interactiveNum3 = () => {
    intro("c = ", (num3) => {
        c = num3;
        if (isNaN(c)) {
            console.log(`Wrong type. Expected a valid real number, got ${c} instead`);
            interactiveNum3();
        }
        rl.close;
        solve(a, b, c);
        process.exit(1);
    });
}

const interactiveNum2 = () => {
    intro("b = ", (num2) => {
        b = num2;
        if (isNaN(b)) {
            console.log(`Wrong type. Expected a valid real number, got ${b} instead`);
            interactiveNum2();
        }
        rl.close;
        interactiveNum3();
    });
}
const interactiveNum1 = () => {
    intro("a = ", (num1) => {
        a = num1;
        if (isNaN(a) || a == 0) {
            console.log(`Wrong type. Expected a valid real number, got ${a} instead`);
            interactiveNum1();
        }
        rl.close;
        interactiveNum2();
    });
}

const notInteractive = () => {
    intro("Enter filename: ", (name) => {
        fs.readFile(name, () => {
            if (!name.includes('.txt')) {
                console.log("Invalid format");
                process.exit(1);
            } else if (fs.existsSync(name)) {
                const fileContent = fs.readFileSync(name, "utf-8");
                const numbers = fileContent.split(" ");
                const parsedNum = numbers.map(parseFloat);

                const a = parsedNum[0];
                const b = parsedNum[1];
                const c = parsedNum[2];

                if (isNaN(a) || a == 0) {
                    console.log(`Wrong type. Expected a valid real number, got ${a} instead`);
                    process.exit(1);
                }
                if (isNaN(b)) {
                    console.log(`Wrong type. Expected a valid real number, got ${b} instead`);
                    process.exit(1);
                }
                if (isNaN(c)) {
                    console.log(`Wrong type. Expected a valid real number, got ${c} instead`);
                    process.exit(1);
                }

                solve(a, b, c);
                process.exit(1);
            } else {
                console.log(`File ${name} doesn't exist`);
                process.exit(1);
            }
        })
    })
}
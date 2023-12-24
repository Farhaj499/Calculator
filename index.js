#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let calculator = async () => {
    console.log("\n");
    console.log(chalk.cyanBright("-- Let's Start Calculation--"));
    // console.log("\n");
    calcInterface();
    let questionColor = chalk.hex('ffb380');
    let question1 = {
        "name": "numb1",
        "type": "number",
        "message": questionColor("Enter value of number 1: "),
    };
    let question2 = {
        "name": "numb2",
        "type": "number",
        "message": questionColor("Enter value of number 2: "),
    };
    let operation_to_perform = await inquirer.prompt([
        {
            name: "pick",
            type: "list",
            message: questionColor("What Operation you want to perform?: \n"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power"],
        },
    ]);
    if (operation_to_perform.pick == "+ Addition") {
        let num = await inquirer.prompt([
            question1, question2
        ]);
        console.log(chalk.yellowBright.bold(String(num.numb1) + " + " + String(num.numb2) + " = " + (num.numb1 + num.numb2)));
    }
    else if (operation_to_perform.pick == "- Subtraction") {
        let num = await inquirer.prompt([
            question1, question2
        ]);
        console.log(chalk.yellowBright.bold(String(num.numb1) + " - " + String(num.numb2) + " = " + (num.numb1 - num.numb2)));
    }
    else if (operation_to_perform.pick == "* Multiplication") {
        let num = await inquirer.prompt([
            question1, question2
        ]);
        console.log(chalk.yellowBright.bold(String(num.numb1) + " x " + String(num.numb2) + " = " + (num.numb1 * num.numb2)));
    }
    else if (operation_to_perform.pick == "/ Division") {
        let num = await inquirer.prompt([
            question1, question2
        ]);
        console.log(chalk.yellowBright.bold(String(num.numb1) + " / " + String(num.numb2) + " = " + (num.numb1 / num.numb2)));
    }
    else if (operation_to_perform.pick == "^ Power") {
        let num = await inquirer.prompt([
            question1, question2
        ]);
        console.log(chalk.yellowBright.bold(String(num.numb1) + " ^ " + String(num.numb2) + " = " + (num.numb1 ** num.numb2)));
    }
    let conf = await inquirer.prompt([
        {
            name: "con",
            type: "confirm",
            message: "Do you want to restart your calculations? Press y or n: "
        }
    ]);
    if (conf.con == true) {
        console.log("\n");
        calculator();
    }
    else {
        console.log(chalk.red("Program Closed."));
        console.log("\n");
    }
};
calculator();
function calcInterface() {
    console.log("\n");
    console.log(chalk.cyan.bold("\t  ---------------------"));
    console.log(chalk.cyan.bold("\t |  __________________ |"));
    console.log(chalk.cyan.bold("\t | | 30           0. | |"));
    console.log(chalk.cyan.bold("\t | |_________________| |"));
    console.log(chalk.cyan.bold("\t |  ___ ___ ___   ___  |"));
    console.log(chalk.cyan.bold("\t | | 7 | 8 | 9 | | + | |"));
    console.log(chalk.cyan.bold("\t | |___|___|___| |___| |"));
    console.log(chalk.cyan.bold("\t | | 4 | 5 | 6 | | - | |"));
    console.log(chalk.cyan.bold("\t | |___|___|___| |___| |"));
    console.log(chalk.cyan.bold("\t | | 1 | 2 | 3 | | x | |"));
    console.log(chalk.cyan.bold("\t | |___|___|___| |___| |"));
    console.log(chalk.cyan.bold("\t | | . | 0 | = | | / | |"));
    console.log(chalk.cyan.bold("\t | |___|___|___| |___| |"));
    console.log(chalk.cyan.bold("\t |_____________________|"));
    console.log("\n");
}

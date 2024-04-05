#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("welcome to islamic bank"));
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your user id :"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your user pin :"
    },
    {
        type: "list",
        name: "accountType",
        message: "Please select your account type :",
        choices: ["current", "savings"]
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "select your transactionType :",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 5000, 10000, 15000],
        message: "select your amount :",
        when(answers) {
            return answers.transactionType === "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "enter the Withdraw amount :",
        when(answers) {
            return answers.transactionType === "Withdraw";
        }
    }
]);
if (answers.userId && answers.userPin) {
    console.log("processing your request...");
    const balance = Math.floor(Math.random() * 100000000);
    console.log(chalk.yellow(`your current balance is ${balance}`));
    const enteredamount = answers.amount;
    if (balance <= enteredamount) {
        console.log(chalk.red("Insuficiant Balance.Please Try Again !"));
    }
    else {
        const remainingbalance = balance - enteredamount;
        console.log(chalk.green(`Transaction is Successfull.! your remaining balance is ${remainingbalance}`));
    }
}

#! /usr/bin/env node
import inquirer from "inquirer";
// Object
let c_value = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Converting From",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "Converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "Your amount to convert :",
        choices: ['PKR', 'UAE', 'USD']
    },
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);

#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => {
    console.log(`Hello ${name}`);
});
program
    .command("add <num1> <num2>")
    .action((num1, num2) => {
    console.log(`${parseFloat(num1) + parseFloat(num2)}`);
});
program.parse();

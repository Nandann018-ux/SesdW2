#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const ApiCommands_1 = require("./src/commands/ApiCommands");
const UtilCommands_1 = require("./src/commands/UtilCommands");
const program = new commander_1.Command();
program
    .name('mycli')
    .description('A fully functional CLI tool built with Node, TypeScript & OOP')
    .version('1.0.0');
// Array of all command classes representing the initial set
const commands = [
    new ApiCommands_1.GithubCommand(program),
    new ApiCommands_1.QuoteCommand(program),
    new ApiCommands_1.JokeCommand(program),
    new UtilCommands_1.GreetCommand(program),
    new UtilCommands_1.CalcCommand(program),
    new UtilCommands_1.TimeCommand(program),
    new UtilCommands_1.RollCommand(program),
    new UtilCommands_1.GuessCommand(program),
    new UtilCommands_1.ReverseCommand(program),
    new UtilCommands_1.InfoCommand(program)
];
// Register all commands
commands.forEach(cmd => cmd.register());
// Add a hook to catch invalid commands
program.on('command:*', function () {
    console.error(chalk_1.default.red('Invalid command: %s\nSee --help for a list of available commands.'), program.args.join(' '));
    process.exit(1);
});
program.parse(process.argv);

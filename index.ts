#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

import { GithubCommand, QuoteCommand, JokeCommand } from './src/commands/ApiCommands';
import { GreetCommand, CalcCommand, TimeCommand, RollCommand, GuessCommand, ReverseCommand, InfoCommand } from './src/commands/UtilCommands';

const program = new Command();

program
    .name('mycli')
    .description('A fully functional CLI tool built with Node, TypeScript & OOP')
    .version('1.0.0');

// Array of all command classes representing the initial set
const commands = [
    new GithubCommand(program),
    new QuoteCommand(program),
    new JokeCommand(program),

    new GreetCommand(program),
    new CalcCommand(program),
    new TimeCommand(program),
    new RollCommand(program),
    new GuessCommand(program),
    new ReverseCommand(program),
    new InfoCommand(program)
];

// Register all commands
commands.forEach(cmd => cmd.register());

// Add a hook to catch invalid commands
program.on('command:*', function () {
    console.error(chalk.red('Invalid command: %s\nSee --help for a list of available commands.'), program.args.join(' '));
    process.exit(1);
});

program.parse(process.argv);
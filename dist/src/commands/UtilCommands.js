"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoCommand = exports.ReverseCommand = exports.GuessCommand = exports.RollCommand = exports.TimeCommand = exports.CalcCommand = exports.GreetCommand = void 0;
const BaseCommand_1 = require("../BaseCommand");
const chalk_1 = __importDefault(require("chalk"));
class GreetCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('greet <name>')
            .description('Greet a user')
            .option('-l, --loud', 'Yell the greeting')
            .action((name, options) => {
            let msg = `Hello, ${name}!`;
            if (options.loud)
                msg = msg.toUpperCase();
            console.log(chalk_1.default.green(msg));
        });
    }
}
exports.GreetCommand = GreetCommand;
class CalcCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('calc <num1> <operator> <num2>')
            .description('Simple calculator (+, -, *, /)')
            .action((num1, operator, num2) => {
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            if (isNaN(n1) || isNaN(n2)) {
                console.log(chalk_1.default.red('Error: Please provide valid numbers.'));
                return;
            }
            let result = 0;
            switch (operator) {
                case '+':
                    result = n1 + n2;
                    break;
                case '-':
                    result = n1 - n2;
                    break;
                case '*':
                    result = n1 * n2;
                    break;
                case '/':
                    if (n2 === 0) {
                        console.log(chalk_1.default.red('Error: Cannot divide by zero.'));
                        return;
                    }
                    result = n1 / n2;
                    break;
                default:
                    console.log(chalk_1.default.red('Error: Invalid operator. Use +, -, *, /'));
                    return;
            }
            console.log(chalk_1.default.blue(`Result: ${result}`));
        });
    }
}
exports.CalcCommand = CalcCommand;
class TimeCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('time')
            .description('Show current local time')
            .action(() => {
            console.log(chalk_1.default.cyan(`Current Time: ${new Date().toLocaleString()}`));
        });
    }
}
exports.TimeCommand = TimeCommand;
class RollCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('roll [sides]')
            .description('Roll an N-sided dice (default 6)')
            .action((sides) => {
            const s = parseInt(sides) || 6;
            if (s < 2) {
                console.log(chalk_1.default.red('Error: Dice must have at least 2 sides.'));
                return;
            }
            const result = Math.floor(Math.random() * s) + 1;
            console.log(chalk_1.default.yellow(`Rolled a ${s}-sided dice and got: `) + chalk_1.default.green.bold(result));
        });
    }
}
exports.RollCommand = RollCommand;
class GuessCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('guess <number>')
            .description('Guess a number between 1 and 10')
            .action((number) => {
            const guess = parseInt(number);
            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log(chalk_1.default.red('Please guess a valid number between 1 and 10.'));
                return;
            }
            const target = Math.floor(Math.random() * 10) + 1;
            if (guess === target) {
                console.log(chalk_1.default.green(`🎉 Correct! The number was ${target}.`));
            }
            else {
                console.log(chalk_1.default.red(`Wrong! Let's try again. The number was ${target}.`));
            }
        });
    }
}
exports.GuessCommand = GuessCommand;
class ReverseCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('reverse <text>')
            .description('Reverse the provided text')
            .action((text) => {
            const reversed = text.split('').reverse().join('');
            console.log(chalk_1.default.blue(`Original: `) + text);
            console.log(chalk_1.default.green(`Reversed: `) + reversed);
        });
    }
}
exports.ReverseCommand = ReverseCommand;
class InfoCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('info')
            .description('Show information about the CLI')
            .action(() => {
            console.log(chalk_1.default.cyan.bold('\n--- MyCLI Tool ---'));
            console.log(chalk_1.default.white('Version: 1.0.0'));
            console.log(chalk_1.default.gray('Description: A minimal OOP-based CLI tool with API integration.\n'));
        });
    }
}
exports.InfoCommand = InfoCommand;

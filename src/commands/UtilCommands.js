"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoCommand = exports.ReverseCommand = exports.GuessCommand = exports.RollCommand = exports.TimeCommand = exports.CalcCommand = exports.GreetCommand = void 0;
var BaseCommand_1 = require("../BaseCommand");
var chalk_1 = require("chalk");
var GreetCommand = /** @class */ (function (_super) {
    __extends(GreetCommand, _super);
    function GreetCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreetCommand.prototype.register = function () {
        this.program
            .command('greet <name>')
            .description('Greet a user')
            .option('-l, --loud', 'Yell the greeting')
            .action(function (name, options) {
            var msg = "Hello, ".concat(name, "!");
            if (options.loud)
                msg = msg.toUpperCase();
            console.log(chalk_1.default.green(msg));
        });
    };
    return GreetCommand;
}(BaseCommand_1.BaseCommand));
exports.GreetCommand = GreetCommand;
var CalcCommand = /** @class */ (function (_super) {
    __extends(CalcCommand, _super);
    function CalcCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalcCommand.prototype.register = function () {
        this.program
            .command('calc <num1> <operator> <num2>')
            .description('Simple calculator (+, -, *, /)')
            .action(function (num1, operator, num2) {
            var n1 = parseFloat(num1);
            var n2 = parseFloat(num2);
            if (isNaN(n1) || isNaN(n2)) {
                console.log(chalk_1.default.red('Error: Please provide valid numbers.'));
                return;
            }
            var result = 0;
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
            console.log(chalk_1.default.blue("Result: ".concat(result)));
        });
    };
    return CalcCommand;
}(BaseCommand_1.BaseCommand));
exports.CalcCommand = CalcCommand;
var TimeCommand = /** @class */ (function (_super) {
    __extends(TimeCommand, _super);
    function TimeCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeCommand.prototype.register = function () {
        this.program
            .command('time')
            .description('Show current local time')
            .action(function () {
            console.log(chalk_1.default.cyan("Current Time: ".concat(new Date().toLocaleString())));
        });
    };
    return TimeCommand;
}(BaseCommand_1.BaseCommand));
exports.TimeCommand = TimeCommand;
var RollCommand = /** @class */ (function (_super) {
    __extends(RollCommand, _super);
    function RollCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCommand.prototype.register = function () {
        this.program
            .command('roll [sides]')
            .description('Roll an N-sided dice (default 6)')
            .action(function (sides) {
            var s = parseInt(sides) || 6;
            if (s < 2) {
                console.log(chalk_1.default.red('Error: Dice must have at least 2 sides.'));
                return;
            }
            var result = Math.floor(Math.random() * s) + 1;
            console.log(chalk_1.default.yellow("Rolled a ".concat(s, "-sided dice and got: ")) + chalk_1.default.green.bold(result));
        });
    };
    return RollCommand;
}(BaseCommand_1.BaseCommand));
exports.RollCommand = RollCommand;
var GuessCommand = /** @class */ (function (_super) {
    __extends(GuessCommand, _super);
    function GuessCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuessCommand.prototype.register = function () {
        this.program
            .command('guess <number>')
            .description('Guess a number between 1 and 10')
            .action(function (number) {
            var guess = parseInt(number);
            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log(chalk_1.default.red('Please guess a valid number between 1 and 10.'));
                return;
            }
            var target = Math.floor(Math.random() * 10) + 1;
            if (guess === target) {
                console.log(chalk_1.default.green("\uD83C\uDF89 Correct! The number was ".concat(target, ".")));
            }
            else {
                console.log(chalk_1.default.red("Wrong! Let's try again. The number was ".concat(target, ".")));
            }
        });
    };
    return GuessCommand;
}(BaseCommand_1.BaseCommand));
exports.GuessCommand = GuessCommand;
var ReverseCommand = /** @class */ (function (_super) {
    __extends(ReverseCommand, _super);
    function ReverseCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReverseCommand.prototype.register = function () {
        this.program
            .command('reverse <text>')
            .description('Reverse the provided text')
            .action(function (text) {
            var reversed = text.split('').reverse().join('');
            console.log(chalk_1.default.blue("Original: ") + text);
            console.log(chalk_1.default.green("Reversed: ") + reversed);
        });
    };
    return ReverseCommand;
}(BaseCommand_1.BaseCommand));
exports.ReverseCommand = ReverseCommand;
var InfoCommand = /** @class */ (function (_super) {
    __extends(InfoCommand, _super);
    function InfoCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoCommand.prototype.register = function () {
        this.program
            .command('info')
            .description('Show information about the CLI')
            .action(function () {
            console.log(chalk_1.default.cyan.bold('\n--- MyCLI Tool ---'));
            console.log(chalk_1.default.white('Version: 1.0.0'));
            console.log(chalk_1.default.gray('Description: A minimal OOP-based CLI tool with API integration.\n'));
        });
    };
    return InfoCommand;
}(BaseCommand_1.BaseCommand));
exports.InfoCommand = InfoCommand;

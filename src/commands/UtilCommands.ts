import { BaseCommand } from '../BaseCommand';
import chalk from 'chalk';

export class GreetCommand extends BaseCommand {
    register(): void {
        this.program
            .command('greet <name>')
            .description('Greet a user')
            .option('-l, --loud', 'Yell the greeting')
            .action((name, options) => {
                let msg = `Hello, ${name}!`;
                if (options.loud) msg = msg.toUpperCase();
                console.log(chalk.green(msg));
            });
    }
}

export class CalcCommand extends BaseCommand {
    register(): void {
        this.program
            .command('calc <num1> <operator> <num2>')
            .description('Simple calculator (+, -, *, /)')
            .action((num1, operator, num2) => {
                const n1 = parseFloat(num1);
                const n2 = parseFloat(num2);

                if (isNaN(n1) || isNaN(n2)) {
                    console.log(chalk.red('Error: Please provide valid numbers.'));
                    return;
                }

                let result = 0;
                switch (operator) {
                    case '+': result = n1 + n2; break;
                    case '-': result = n1 - n2; break;
                    case '*': result = n1 * n2; break;
                    case '/':
                        if (n2 === 0) {
                            console.log(chalk.red('Error: Cannot divide by zero.'));
                            return;
                        }
                        result = n1 / n2;
                        break;
                    default:
                        console.log(chalk.red('Error: Invalid operator. Use +, -, *, /'));
                        return;
                }
                console.log(chalk.blue(`Result: ${result}`));
            });
    }
}

export class TimeCommand extends BaseCommand {
    register(): void {
        this.program
            .command('time')
            .description('Show current local time')
            .action(() => {
                console.log(chalk.cyan(`Current Time: ${new Date().toLocaleString()}`));
            });
    }
}

export class RollCommand extends BaseCommand {
    register(): void {
        this.program
            .command('roll [sides]')
            .description('Roll an N-sided dice (default 6)')
            .action((sides) => {
                const s = parseInt(sides) || 6;
                if (s < 2) {
                    console.log(chalk.red('Error: Dice must have at least 2 sides.'));
                    return;
                }
                const result = Math.floor(Math.random() * s) + 1;
                console.log(chalk.yellow(`Rolled a ${s}-sided dice and got: `) + chalk.green.bold(result));
            });
    }
}

export class GuessCommand extends BaseCommand {
    register(): void {
        this.program
            .command('guess <number>')
            .description('Guess a number between 1 and 10')
            .action((number) => {
                const guess = parseInt(number);
                if (isNaN(guess) || guess < 1 || guess > 10) {
                    console.log(chalk.red('Please guess a valid number between 1 and 10.'));
                    return;
                }
                const target = Math.floor(Math.random() * 10) + 1;
                if (guess === target) {
                    console.log(chalk.green(`🎉 Correct! The number was ${target}.`));
                } else {
                    console.log(chalk.red(`Wrong! Let's try again. The number was ${target}.`));
                }
            });
    }
}

export class ReverseCommand extends BaseCommand {
    register(): void {
        this.program
            .command('reverse <text>')
            .description('Reverse the provided text')
            .action((text) => {
                const reversed = text.split('').reverse().join('');
                console.log(chalk.blue(`Original: `) + text);
                console.log(chalk.green(`Reversed: `) + reversed);
            });
    }
}

export class InfoCommand extends BaseCommand {
    register(): void {
        this.program
            .command('info')
            .description('Show information about the CLI')
            .action(() => {
                console.log(chalk.cyan.bold('\n--- MyCLI Tool ---'));
                console.log(chalk.white('Version: 1.0.0'));
                console.log(chalk.gray('Description: A minimal OOP-based CLI tool with API integration.\n'));
            });
    }
}

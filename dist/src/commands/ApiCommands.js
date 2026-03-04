"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = exports.QuoteCommand = exports.GithubCommand = void 0;
const chalk_1 = __importDefault(require("chalk"));
const BaseCommand_1 = require("../BaseCommand");
class GithubCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('github <username>')
            .description('Fetch a GitHub user profile')
            .action(async (username) => {
            try {
                const res = await fetch(`https://api.github.com/users/${username}`);
                if (!res.ok)
                    throw new Error('User not found');
                const data = await res.json();
                console.log(chalk_1.default.green(`\n=== GitHub Profile: ${data.login} ===`));
                console.log(chalk_1.default.blue(`Name: `) + (data.name || 'N/A'));
                console.log(chalk_1.default.blue(`Public Repos: `) + data.public_repos);
                console.log(chalk_1.default.blue(`Followers: `) + data.followers);
                console.log(chalk_1.default.blue(`Bio: `) + (data.bio || 'N/A'));
                console.log('');
            }
            catch (error) {
                console.log(chalk_1.default.red(`Error: ${error.message}`));
            }
        });
    }
}
exports.GithubCommand = GithubCommand;
class QuoteCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('quote')
            .description('Get a random inspirational quote')
            .action(async () => {
            try {
                const res = await fetch('https://dummyjson.com/quotes/random');
                const data = await res.json();
                console.log(chalk_1.default.cyan(`\n"${data.quote}"`));
                console.log(chalk_1.default.yellow(`- ${data.author}\n`));
            }
            catch (error) {
                console.log(chalk_1.default.red('Failed to fetch quote.'));
            }
        });
    }
}
exports.QuoteCommand = QuoteCommand;
class JokeCommand extends BaseCommand_1.BaseCommand {
    register() {
        this.program
            .command('joke')
            .description('Get a random programming joke')
            .action(async () => {
            try {
                const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
                const data = await res.json();
                const joke = data[0];
                console.log(chalk_1.default.magenta(`\n${joke.setup}`));
                console.log(chalk_1.default.green(`${joke.punchline}\n`));
            }
            catch (error) {
                console.log(chalk_1.default.red('Failed to fetch a joke.'));
            }
        });
    }
}
exports.JokeCommand = JokeCommand;

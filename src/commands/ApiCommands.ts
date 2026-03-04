import { Command } from 'commander';
import chalk from 'chalk';
import { BaseCommand } from '../BaseCommand';

export class GithubCommand extends BaseCommand {
    register(): void {
        this.program
            .command('github <username>')
            .description('Fetch a GitHub user profile')
            .action(async (username) => {
                try {
                    const res = await fetch(`https://api.github.com/users/${username}`);
                    if (!res.ok) throw new Error('User not found');
                    const data = await res.json();
                    console.log(chalk.green(`\n=== GitHub Profile: ${data.login} ===`));
                    console.log(chalk.blue(`Name: `) + (data.name || 'N/A'));
                    console.log(chalk.blue(`Public Repos: `) + data.public_repos);
                    console.log(chalk.blue(`Followers: `) + data.followers);
                    console.log(chalk.blue(`Bio: `) + (data.bio || 'N/A'));
                    console.log('');
                } catch (error: any) {
                    console.log(chalk.red(`Error: ${error.message}`));
                }
            });
    }
}

export class QuoteCommand extends BaseCommand {
    register(): void {
        this.program
            .command('quote')
            .description('Get a random inspirational quote')
            .action(async () => {
                try {
                    const res = await fetch('https://dummyjson.com/quotes/random');
                    const data = await res.json();
                    console.log(chalk.cyan(`\n"${data.quote}"`));
                    console.log(chalk.yellow(`- ${data.author}\n`));
                } catch (error: any) {
                    console.log(chalk.red('Failed to fetch quote.'));
                }
            });
    }
}

export class JokeCommand extends BaseCommand {
    register(): void {
        this.program
            .command('joke')
            .description('Get a random programming joke')
            .action(async () => {
                try {
                    const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
                    const data = await res.json();
                    const joke = data[0];
                    console.log(chalk.magenta(`\n${joke.setup}`));
                    console.log(chalk.green(`${joke.punchline}\n`));
                } catch (error) {
                    console.log(chalk.red('Failed to fetch a joke.'));
                }
            });
    }
}

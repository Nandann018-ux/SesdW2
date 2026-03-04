import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import { ApiService } from '../services/ApiService';

export class GithubCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('github <username>')
            .description('Fetches GitHub user profile information')
            .action(async (username) => {
                await this.execute(username);
            });
    }

    async execute(username: string): Promise<void> {
        this.logger.info(`Fetching GitHub data for user: ${username}...`);
        const url = `https://api.github.com/users/${username}`;
        const data = await ApiService.get<any>(url);

        if (data) {
            this.logger.success('User found!');
            this.logger.log(`  Name: ${data.name || 'N/A'}`);
            this.logger.log(`  Bio: ${data.bio || 'N/A'}`);
            this.logger.log(`  Public Repos: ${data.public_repos}`);
            this.logger.log(`  Followers: ${data.followers}`);
            this.logger.log(`  URL: ${data.html_url}`);
        }
    }
}

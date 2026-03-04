import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import { ApiService } from '../services/ApiService';

export class QuoteCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('quote')
            .description('Fetches a random inspirational quote')
            .action(async () => {
                await this.execute();
            });
    }

    async execute(): Promise<void> {
        this.logger.info('Fetching a random quote...');
        const url = 'https://dummyjson.com/quotes/random';

        const data = await ApiService.get<{ quote: string, author: string }>(url);

        if (data && data.quote) {
            this.logger.success(`"${data.quote}"`);
            this.logger.log(`  — ${data.author}`);
        }
    }
}

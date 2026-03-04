import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import { ApiService } from '../services/ApiService';

export class WeatherCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('weather <city>')
            .description('Gets the current weather for a specified city')
            .action(async (city) => {
                await this.execute(city);
            });
    }

    async execute(city: string): Promise<void> {
        this.logger.info(`Fetching weather for: ${city}...`);
        const url = `https://wttr.in/${encodeURIComponent(city)}?format=3`;

        const data = await ApiService.get<string>(url, 'text');

        if (data) {
            this.logger.success(data.trim());
        }
    }
}

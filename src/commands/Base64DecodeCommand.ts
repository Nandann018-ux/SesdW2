import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';

export class Base64DecodeCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('b64decode <text>')
            .description('Decodes a Base64 string')
            .action((text) => {
                this.execute(text);
            });
    }

    async execute(text: string): Promise<void> {
        try {
            const decoded = Buffer.from(text, 'base64').toString('utf-8');
            this.logger.success(decoded);
        } catch (error: any) {
            this.logger.error(`Failed to decode base64: ${error.message}`);
        }
    }
}

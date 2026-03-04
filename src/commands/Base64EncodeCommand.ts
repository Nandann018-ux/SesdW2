import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';

export class Base64EncodeCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('b64encode <text>')
            .description('Encodes a string to Base64')
            .action((text) => {
                this.execute(text);
            });
    }

    async execute(text: string): Promise<void> {
        const encoded = Buffer.from(text, 'utf-8').toString('base64');
        this.logger.success(encoded);
    }
}

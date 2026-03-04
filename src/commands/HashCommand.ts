import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import * as crypto from 'crypto';

export class HashCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('hash <text>')
            .description('Generates a SHA-256 hash of a text string')
            .action((text) => {
                this.execute(text);
            });
    }

    async execute(text: string): Promise<void> {
        const hash = crypto.createHash('sha256').update(text).digest('hex');
        this.logger.success(`SHA-256: ${hash}`);
    }
}

import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import { z } from 'zod';
import { Validator } from '../utils/Validator';

export class GreetCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('greet <name>')
            .description('Greets the user properly.')
            .option('-u, --uppercase', 'Uppercase the greeting')
            .action((name, options) => {
                this.execute(name, options);
            });
    }

    async execute(name: string, options: { uppercase?: boolean }): Promise<void> {
        const schema = z.string().min(2, "Name must be at least 2 characters long");
        const validName = Validator.validate(schema, name);

        if (!validName) return;

        let greeting = `Hello, ${validName}! Welcome to my OOP CLI Tool.`;
        if (options.uppercase) {
            greeting = greeting.toUpperCase();
        }

        this.logger.success(greeting);
    }
}

import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import { z } from 'zod';
import { Validator } from '../utils/Validator';

export class AddCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('add <num1> <num2>')
            .description('Adds two numbers together')
            .action((num1, num2) => {
                this.execute(num1, num2);
            });
    }

    async execute(num1: string, num2: string): Promise<void> {
        const schema = z.object({
            n1: z.coerce.number(),
            n2: z.coerce.number()
        });

        const data = Validator.validate(schema, { n1: num1, n2: num2 });
        if (!data) return;

        this.logger.success(`${data.n1} + ${data.n2} = ${data.n1 + data.n2}`);
    }
}

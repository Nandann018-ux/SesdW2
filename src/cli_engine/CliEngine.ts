import { Command, program } from 'commander';
import { BaseCommand } from '../core/Command';
import figlet from 'figlet';
import chalk from 'chalk';

export class CliEngine {
    private program: Command;
    private commands: BaseCommand[] = [];

    constructor() {
        this.program = program;
        this.setup();
    }

    private setup(): void {
        this.program
            .name('mycli')
            .description('A fully functional OOP CLI tool built with Node & TypeScript')
            .version('1.0.0');
    }

    public registerCommand(command: BaseCommand): void {
        this.commands.push(command);
        command.register(this.program);
    }

    public async run(): Promise<void> {
        if (process.argv.length < 3) {
            console.clear();
            const banner = figlet.textSync("FAHHH", { font: "ANSI Shadow", horizontalLayout: "full" });
            console.log(chalk.white(banner));

            setTimeout(() => {
                this.program.outputHelp();
            }, 1500);
            return;
        }

        await this.program.parseAsync(process.argv);
    }
}

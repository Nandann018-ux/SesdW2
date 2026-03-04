import { Command as CommanderCommand } from 'commander';
import { Logger } from '../utils/Logger';

export abstract class BaseCommand {
    protected logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    /**
     * Registers the command with the commander program
     * @param program The main commander instance
     */
    abstract register(program: CommanderCommand): void;

    /**
     * The logic executed when the command runs
     */
    abstract execute(...args: any[]): Promise<void> | void;
}

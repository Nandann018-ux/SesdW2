import { Command as CommanderCommand } from 'commander';
import { Logger } from '../utils/Logger';

export abstract class BaseCommand {
    protected logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    abstract register(program: CommanderCommand): void;

    abstract execute(...args: any[]): Promise<void> | void;
}

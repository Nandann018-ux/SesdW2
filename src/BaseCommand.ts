import { Command } from 'commander';

export abstract class BaseCommand {
    constructor(protected program: Command) {}

    // Every command class must implement this to register its command
    abstract register(): void;
}

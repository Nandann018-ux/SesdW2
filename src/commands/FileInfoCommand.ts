import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import * as fs from 'fs';
import * as path from 'path';

export class FileInfoCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('fileinfo <filename>')
            .description('Get metadata information about a file')
            .action((filename) => {
                this.execute(filename);
            });
    }

    async execute(filename: string): Promise<void> {
        try {
            const absolutePath = path.resolve(process.cwd(), filename);
            if (!fs.existsSync(absolutePath)) {
                this.logger.error(`File does not exist: ${filename}`);
                return;
            }

            const stats = fs.statSync(absolutePath);
            this.logger.info(`File Info for: ${filename}`);
            this.logger.log(`  Size: ${stats.size} bytes`);
            this.logger.log(`  Created: ${stats.birthtime.toLocaleString()}`);
            this.logger.log(`  Modified: ${stats.mtime.toLocaleString()}`);
            this.logger.log(`  Is Directory: ${stats.isDirectory()}`);

            // Output permission flags rudimentary form
            const modes = stats.mode.toString(8);
            this.logger.log(`  Permissions (Octal): ${modes.slice(-3)}`);
        } catch (error: any) {
            this.logger.error(`Failed to read file info: ${error.message}`);
        }
    }
}

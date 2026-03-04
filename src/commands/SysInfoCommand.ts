import { Command as CommanderCommand } from 'commander';
import { BaseCommand } from '../core/Command';
import * as os from 'os';

export class SysInfoCommand extends BaseCommand {
    register(program: CommanderCommand): void {
        program
            .command('sysinfo')
            .description('Displays system information')
            .action(() => {
                this.execute();
            });
    }

    async execute(): Promise<void> {
        this.logger.info('System Information:');
        this.logger.log(`  OS: ${os.type()} ${os.release()}`);
        this.logger.log(`  Architecture: ${os.arch()}`);
        this.logger.log(`  CPUs: ${os.cpus().length} core(s)`);

        const totalMemMB = (os.totalmem() / (1024 * 1024)).toFixed(2);
        const freeMemMB = (os.freemem() / (1024 * 1024)).toFixed(2);

        this.logger.log(`  Total Memory: ${totalMemMB} MB`);
        this.logger.log(`  Free Memory: ${freeMemMB} MB`);
    }
}

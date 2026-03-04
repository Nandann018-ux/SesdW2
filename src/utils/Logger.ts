import chalk from 'chalk';

export class Logger {
    public success(message: string): void {
        console.log(chalk.green('✔ Success:'), message);
    }

    public error(message: string): void {
        console.error(chalk.red('✖ Error:'), message);
    }

    public info(message: string): void {
        console.log(chalk.blue('ℹ Info:'), message);
    }

    public warn(message: string): void {
        console.log(chalk.yellow('⚠ Warning:'), message);
    }

    public log(message: string): void {
        console.log(message);
    }
}

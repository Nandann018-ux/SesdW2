import { z, ZodError } from 'zod';
import { Logger } from './Logger';

export class Validator {
    private static logger = new Logger();

    public static validate<T>(schema: z.ZodType<T>, data: unknown): T | null {
        try {
            return schema.parse(data);
        } catch (error: any) {
            if (error instanceof ZodError) {
                this.logger.error('Validation failed:');
                (error as any).errors.forEach((err: any) => {
                    const path = err.path.length > 0 ? `[${err.path.join('.')}] ` : '';
                    this.logger.error(`  - ${path}${err.message}`);
                });
            } else {
                this.logger.error('Unknown validation error occurred.');
            }
            return null;
        }
    }
}

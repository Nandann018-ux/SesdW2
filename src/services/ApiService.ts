import axios from 'axios';
import { Logger } from '../utils/Logger';

export class ApiService {
    private static logger = new Logger();

    public static async get<T>(url: string, responseType: 'json' | 'text' = 'json'): Promise<T | null> {
        try {
            const response = await axios.get<T>(url, { responseType: responseType === 'text' ? 'text' : 'json' });
            return response.data;
        } catch (error: any) {
            this.logger.error(`API Request failed for ${url}`);
            if (error.response) {
                this.logger.error(`Status: ${error.response.status} - ${error.response.statusText}`);
            } else {
                this.logger.error(error.message);
            }
            return null;
        }
    }
}

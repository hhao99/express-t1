import { existsSync, mkdirSync } from 'fs';
import winston, { Logger } from 'winston';

const log_dir = './log';

if (!existsSync(log_dir)) {
	mkdirSync(log_dir);
}

const logger: Logger = winston.createLogger({
	format: winston.format.json(),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: `${log_dir}/app.log` }),
	],
});

export default logger;

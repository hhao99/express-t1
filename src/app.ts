import * as http from 'http';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import registerRoutes from './routes';

export default class App {
	public express: express.Application;

	public httpServer: http.Server;

	public async init(): Promise<void> {
		this.express = express();
		this.httpServer = http.createServer(this.express);
		this.middlewares();
		this.routes();
	}

	private routes(): void {
		this.express.get('/', this.basePathRoutes);
	}
	private basePathRoutes(req: express.Request, res: express.Response): void {
		res.json({ message: 'base path message' });
	}
	private middlewares(): void {
		this.express.use(helmet({ contentSecurityPolicy: false }));
		this.express.use(express.json({ limit: '100mb' }));
		this.express.use(
			express.urlencoded({ limit: '200mb', extended: true }),
		);
		this.express.use(
			cors({
				origin: [
					'http://localhost:8080',
					'http://127.0.0.1:8080',
					'https://example.com',
				],
			}),
		);
	}
}

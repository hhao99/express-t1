import dotenv from 'dotenv';
import express from 'express';
import type { Express, Request, Response } from 'express';
// dotenv init
dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();

// first route
app.get('/', (req: Request, res: Response) => {
	res.end('hello express');
});
app.listen(port, () => {
	console.log(`app running on port: ${port}`);
});

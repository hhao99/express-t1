import { Router } from 'express';
export default function registerRouters(): Router {
	const router = Router();
	router.get('/', () => 'index');

	return router;
}

import * as http from 'http';

import App from './app';
import logger from './lib/logger';

const app: App = new App();
let server: http.Server;

app.init()
	.then(() => {
		app.express.set('port', process.env.PORT);
		server = app.httpServer;
		server.listen(process.env.PORT || 8080);
	})
	.catch((e) => {
		logger.error('server error');
		logger.error(e.name);
		logger.error(e.message);
		logger.error(e.stack);
	});

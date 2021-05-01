import express from 'express';

import logger from '../utils/logger';
import notFound from './notFound';
import error from './error';

const app = express();

try {
    /** Add custom routes here */
    app.use(notFound);
    app.use(error);
} catch (e) {
    logger.fatal('Unhandled route error ->', e);
}

export default app;

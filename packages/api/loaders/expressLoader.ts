import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from '../routes/index';

/**
 * Initialize Express
 */
export default async (app: Application): Promise<Application> => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json({ limit: '50mb' }));
    app.use(
        express.urlencoded({
            limit: '50mb',
            extended: true
        })
    );
    app.use(express.text({ limit: '50mb' }));
    app.use(express.raw({ limit: '50mb' }));

    /** Routes */
    app.use(routes);

    return app;
};

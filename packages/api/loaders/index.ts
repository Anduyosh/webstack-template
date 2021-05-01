import express from 'express';
import logger from '../utils/logger';
import configLoader from './configLoader';
import expressLoader from './expressLoader';

/**
 * Loaders handler.
 * Asynchronously calls each API loader.
 */
export default async (app: express.Application): Promise<void> => {
    try {
        await configLoader();
        logger.trace('Configuration loaded');
        await expressLoader(app);
        logger.trace('Express loaded');
    } catch (error) {
        logger.fatal(error);
        logger.fatal('Loader error');
        process.exit(1);
    }
};

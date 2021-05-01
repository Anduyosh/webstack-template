import { NextFunction, Request, Response } from 'express';

import Http from '../enums/http';
import logger from '../utils/logger';

const error = (
    err: any,
    req: Request,
    res: Response,
    _next: NextFunction
): Response<any> => {
    try {
        logger.error(`[${req.path}] Error handled ->`, err);
        return res.status(err.status).send();
    } catch (e) {
        logger.fatal('Fatal error on errorHandler');
        logger.debug(e);
        res.status(Http.StatusCode.InternalServerError);
        return res.send('-1');
    }
};

export default error;

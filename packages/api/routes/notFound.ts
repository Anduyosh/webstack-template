import { Request, Response } from 'express';
import Http from '../enums/http';
import logger from '../utils/logger';

const notFound = (_req: Request, res: Response): Response => {
    logger.trace('Not found');
    res.status(Http.StatusCode.NotFound);
    return res.send(Http.StatusError.NotFound);
};

export default notFound;

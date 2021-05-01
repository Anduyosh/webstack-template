import { envScheme } from '../env';
import logger from '../utils/logger';

export default async (): Promise<void> => {
    [
        'SIGHUP',
        'SIGINT',
        'SIGQUIT',
        'SIGILL',
        'SIGTRAP',
        'SIGABRT',
        'SIGBUS',
        'SIGFPE',
        'SIGUSR1',
        'SIGSEGV',
        'SIGUSR2',
        'SIGTERM'
    ].forEach((signal) => {
        process.on(signal, (): void => {
            logger.log('Signal ->', signal);
            /** Handle error */
        });
    });

    process.on('uncaughtException', (): void => {
        logger.fatal('Uncaught exception');
        process.exit(1);
    });

    try {
        envScheme.validate({ allowed: 'strict' });
    } catch (ex) {
        logger.fatal('Config scheme not valid');
        process.exit(1);
    }
};

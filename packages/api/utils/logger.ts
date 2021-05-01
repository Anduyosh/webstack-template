import tracer from 'tracer';
import env from '../env';

const logger = tracer.colorConsole({
    format: '{{timestamp}} {{message}} (in {{file}}:{{line}})',
    dateformat: 'HH:MM:ss',
    level: env.env === 'development' ? 'log' : 'error'
});

export default logger;

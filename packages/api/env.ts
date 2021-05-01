import dotenv from 'dotenv';
import convict from 'convict';
import convictFormats from 'convict-format-with-validator';

/** Load environment variables */
dotenv.config();

/** Add all convict formats */
convict.addFormats(convictFormats);

/**
 * Environment schema
 */
export const envScheme = convict({
    env: {
        doc: 'Application environment',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'Port to bind',
        format: 'port',
        default: 8090,
        env: 'PORT'
    },
    token: {
        seed: {
            doc: 'Token seed',
            format: String,
            default:
                'Xx18a552378saaEkrNt3860e8d44567f0U98r4k80k78osTkFFrt964hj569w1S',
            env: 'TOKEN_SEED'
        },
        expiration: {
            doc: 'Token expiration',
            format: String,
            default: null,
            env: 'TOKEN_EXPIRATION'
        },
        expirationInMs: {
            doc: 'Token expiration in milliseconds',
            format: Number,
            default: 86400000,
            env: 'TOKEN_EXPIRATION_MS'
        }
    },
    db: {
        server: {
            doc: 'Database server address',
            format: 'ipaddress',
            default: '127.0.0.1',
            env: 'DB_SERVER'
        },
        name: {
            doc: 'Database name',
            format: String,
            default: 'MY_DATABASE',
            env: 'DB_NAME'
        },
        user: {
            doc: 'Database user',
            format: String,
            default: 'DATABASE_USER',
            env: 'DB_USER'
        },
        password: {
            doc: 'Database password',
            format: String,
            default: 'DATABASE_PASSWORD',
            env: 'DB_PASSWORD'
        }
    }
});

export default envScheme.getProperties();

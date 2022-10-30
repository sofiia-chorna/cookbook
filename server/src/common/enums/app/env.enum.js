import { config } from 'dotenv';

config();

const {
  APP_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_CLIENT
} = process.env;

const ENV = {
  APP: {
    API_PATH: '/api',
    PORT: APP_PORT
  },
  DB: {
    DATABASE: DB_NAME,
    USERNAME: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
    HOST: DB_HOST,
    PORT: DB_PORT,
    CLIENT: DB_CLIENT,
    DEBUG: false
  }
};

export { ENV };

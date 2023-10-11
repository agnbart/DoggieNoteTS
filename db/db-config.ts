import { config } from 'dotenv';
config();

export const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'defaultUser',
    password: process.env.DB_PASSWORD || 'defaultPassword',
    database: process.env.DB_DATABASE || 'defaultDatabase',
}
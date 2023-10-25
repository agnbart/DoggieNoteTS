import * as mysql from 'mysql2/promise';
import { dbConfig } from '../db/db-config';

let pool: mysql.Pool;

export async function connectToDatabase(): Promise<mysql.Pool> {
    pool = await mysql.createPool(dbConfig);
    return pool;
}

export async function disconnectFromDatabase(): Promise<void> {
    try {
        if (pool) {
            await pool.end(); // Zamykanie połączenia z bazą danych
            console.log('Disconnected from the database.');
        } else {
            console.log('No active connection to close.');
        }
    } catch (error) {
        console.error('Error disconnecting from the database:', error);
    }
}
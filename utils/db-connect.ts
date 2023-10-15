import * as mysql from "mysql2/promise";
import {dbConfig} from "../db/db-config";

export async function connectToDatabase() {
    const connection = await mysql.createConnection(dbConfig);
    return connection;
}
import {connectToDatabase} from "../utils/connect-db";

export async function getAllDogs() {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute('SELECT * FROM dogs');
    return rows;
}
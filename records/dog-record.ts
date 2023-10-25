import {OkPacket, RowDataPacket} from "mysql2";
import {connectToDatabase} from "../utils/db-connect";
import {v4 as uuid} from 'uuid';

interface DogRecordFields extends RowDataPacket {
    id: string;
    name: string;
    kennel_name?: string;
    official_name?: string;
    date_of_birth: Date;
}

interface DogRecordDB extends DogRecordFields, RowDataPacket {
}

export class DogRecord {
    public id?: string;
    public name: string;
    public kennel_name?: string;
    public official_name?: string;
    public date_of_birth: Date;

    constructor(obj: DogRecord) {
        const {id, name, kennel_name, official_name, date_of_birth} = obj;
        this.id = id;
        this.name = name;
        this.kennel_name = kennel_name;
        this.official_name = official_name;
        this.date_of_birth = date_of_birth;
    }

    static async getAllDogs(): Promise<DogRecord[]> {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute<DogRecordDB[]>('SELECT * FROM dogs');
        return rows.map((row) => new DogRecord(row));
    }

    static async getOne(id: string): Promise<DogRecord> {
        const connection = await connectToDatabase();
        const [row] = await connection.execute<DogRecordDB[]>('SELECT * FROM dogs WHERE id = ?', [id]);
        return row[0]
    }

    static async addDog(obj: DogRecord): Promise<string> {
        const connection = await connectToDatabase();
        const {name, kennel_name, official_name, date_of_birth} = obj;
        const [result] = await connection.execute<OkPacket>('INSERT INTO dogs (id, name, kennel_name, official_name, date_of_birth) VALUES (?, ?, ?, ?, ?)', [uuid(), name, kennel_name, official_name, date_of_birth]);
        const insertId = result.insertId;
        return insertId.toString();
    }
}
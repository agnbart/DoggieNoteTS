import {before, after} from 'mocha';
import {app} from "../index";
import {connectToDatabase} from "../utils/db-connect";

let server: any;

before(async () => {
    await connectToDatabase();
    server = app.listen();
})

after(async () => {
    await server.close();
})
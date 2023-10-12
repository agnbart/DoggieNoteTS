import { expect } from 'chai';
import * as request from 'supertest';
import { dbConfig } from "../db/db-config";

let server: any;

describe('Database connection', () => {
   it('should connect to database', () => {
       expect(dbConfig).to.exist;
   });
});

import {Router} from "express";
import {DogRecord} from "../records/dog-record";

export const dogRouter = Router();

dogRouter
    .get('/', async (req, res) => {
        const dogs = await DogRecord.getAllDogs();
        res.status(200).json(dogs);
    })

    .post('/', (req, res) => {

    })

    .put('/:id', (req, res) => {

    })

    .delete('/:id', (req, res) => {

    })
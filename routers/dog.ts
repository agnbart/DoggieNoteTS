import {Router} from "express";
import {DogRecord} from "../records/dog-record";

export const dogRouter = Router();

dogRouter
    .get('/', async (req, res) => {
        try {
            const dogs = await DogRecord.getAllDogs();
            res.status(200).json(dogs);
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    })

    .get('/:id', async (req, res) => {
        const id = req.params.id;
        const dog = await DogRecord.getOne(id);
        res.status(200).json(dog)

    })

    .post('/', (req, res) => {

    })

    .put('/:id', (req, res) => {

    })

    .delete('/:id', (req, res) => {

    })
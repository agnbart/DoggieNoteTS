import {Router} from "express";
import {DogRecord} from "../records/dog-record";

export const dogRouter = Router();

dogRouter
    .get('/', async (req, res) => {
        try {
            const dogs = await DogRecord.getAllDogs();
            res.status(200).json(dogs);
        } catch (err) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    })

    .get('/:id', async (req, res) => {
        const id = req.params.id;
        const dog = await DogRecord.getOne(id);
        res.status(200).json(dog)

    })

    .post('/', async (req, res) => {
        try {
            const id = await DogRecord.addDog(req.body);
            res.status(200).json(req.body);
        } catch (err) {
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })

    .put('/:id', async (req, res) => {
        try {
            const updatedRecord = await DogRecord.updateDog(req.params.id, req.body);
            if (updatedRecord) {
                res.status(200).json(updatedRecord);
            } else {
                res.status(404).json({error: 'Record not found'});
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })

    .delete('/:id', (req, res) => {

    })
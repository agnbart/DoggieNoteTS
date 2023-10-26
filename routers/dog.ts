import {Router} from "express";
import {DogRecord} from "../records/dog-record";
import {ValidationError} from "../utils/error";

export const dogRouter = Router();

dogRouter
    .get('/', async (req, res, next) => {
        try {
            const dogs = await DogRecord.getAllDogs();
            res.status(200).json(dogs);
        } catch (err) {
            next(err);
        }
    })

    .get('/:id', async (req, res, next) => {
        try {
            const dog = await DogRecord.getOne(req.params.id);
            if (dog) {
                res.status(200).json(dog);
            } else {
                const error = new ValidationError('Record not found');
                next(error);
            }
        } catch (err) {
            next(err);
        }
    })

    .post('/', async (req, res, next) => {
        try {
            const id = await DogRecord.addDog(req.body);
            res.status(201).json(req.body);
        } catch (err) {
            next(err);
        }
    })

    .put('/:id', async (req, res, next) => {
        try {
            const updatedRecord = await DogRecord.updateDog(req.params.id, req.body);
            if (updatedRecord) {
                res.status(201).json(updatedRecord);
            } else {
                const error = new ValidationError('Record not found');
                next(error);
            }
        } catch (err) {
            next(err);
        }
    })

    .delete('/:id', async (req, res, next) => {
        try {
            await DogRecord.deleteDog(req.params.id);
            if (req.params.id) {
                res.status(204);
            } else {
                const error = new ValidationError('Record not found');
                next(error);
            }
        } catch (err) {
            next(err);
        }
    })
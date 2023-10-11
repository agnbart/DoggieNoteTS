import {Router} from "express";

export const dogRouter = Router();

dogRouter
    .get('/', (req, res) => {
        res.send("Hello on dog site!");
    })

    .post('/', (req, res) => {

    })

    .put('/:id', (req, res) => {

    })

    .delete('/:id', (req, res) => {

    })
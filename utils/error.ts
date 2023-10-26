import {NextFunction, Request, Response} from "express";

export class ValidationError extends Error {}

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);
    const status = err instanceof ValidationError ? 400 : 500;
    if (status === 400) {
        res.status(status).json({error: err.message});
    } else {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

import * as express from 'express';
import {homeRouter} from "./routers/home";

export const app = express();

const PORT: number = Number(process.env.PORT) || 4000;

app.use(express.json());

app.use('/', homeRouter)

app.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${PORT}`)
});
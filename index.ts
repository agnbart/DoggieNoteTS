import * as express from 'express';
import {homeRouter} from "./routers/home";
import {dogRouter} from "./routers/dog";

export const app = express();

const PORT: number = Number(process.env.PORT) || 4000;

app.use(express.json());

// (async () => {
//     try {
//         const dogs = await getAllDogs();
//         console.log(dogs)
//     } catch (err) {
//         console.error(err)
//     }
// })();

app.use('/', homeRouter)
app.use('/dog', dogRouter);


app.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${PORT}`)
});
import express from 'express';
import {router as userRoute} from './routes/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());


app.use("/api/v1/user", userRoute)

app.listen(3000, () => {
    console.log("Server is up and running at 3000")
})
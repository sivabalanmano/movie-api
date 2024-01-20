import express, { Router } from 'express';
import bodyParser from 'body-parser';
import movieRoute from "./routes/movie.js";
import sqlSring from "sqlstring";

import cors from "cors";

const app = express();
const PORT =5000;

app.use(bodyParser.json())
app.use(cors());

app.use('/movie', movieRoute)


app.listen(PORT,()=> console.log(`server is runing on port http://localhost:${PORT}`))


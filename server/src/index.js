import express from 'express';
import dbConfig from './config/dbConfig.js';
import cors from 'cors';
import routes from './routes.js'

const app = express();

app.use(express.json())
dbConfig()

app.use(cors)
app.use(routes)



app.listen(3030, () => console.log('Server is runing on http://localhost:3030'));
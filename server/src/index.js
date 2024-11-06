import express from 'express';
import dbConfig from './config/dbConfig.js';

const app = express();

dbConfig()


app.get('/', (req, res) => {
   res.send('hi form server');
   
})

app.listen(3030, () => console.log('Server is runing on http://localhost:3030'));
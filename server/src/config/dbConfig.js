import { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:27017/agency-mern';

export default async function dbConfig(params) {
    
    try {
       await connect(dbUrl)
        console.log('Successfully conected to DB');
        
    } catch (err) {
        console.log( `Cannot connect to DB ${err}`);
    }
}
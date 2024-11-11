import { Router } from "express";
import validator from 'validator';
import userService from '../services/userService.js'
const router = Router();

router.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body

    if (!username || !email || !password) {
        throw Error('All fields are required!');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!')
        
    }

    await userService.register(username, email, password, rePassword);
    
    // const token = await userService.login(email, password);
    // res.cookie('auth', token, { httpOnly: true })
   
});

export default router
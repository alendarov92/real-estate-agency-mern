import { Router } from "express";
import validator from 'validator';
import userService from '../services/userService.js'
const router = Router();

router.post('/register', async (req, res) => {
    const userData = req.body

    if (!validator.isEmail(userData.email)) {
       return res.status(400).end();
    }

    await userService.register(userData);
    
    // const token = await userService.login(email, password);
    // res.cookie('auth', token, { httpOnly: true })

    res.redirect('/')
   

});

export default router
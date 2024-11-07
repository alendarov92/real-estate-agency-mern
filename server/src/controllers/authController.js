import { Router } from "express";


const router = Router();

router.post('/register', async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    if (!validator.isEmail(email)) {
       return res.status(400).end();
    }

    await authService.register(email, password);
    
    const token = await authService.login(email, password);
    res.cookie('auth', token, { httpOnly: true })

    res.redirect('/')

});

export default router
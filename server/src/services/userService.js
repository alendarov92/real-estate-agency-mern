import User from '../models/User.js'


const register = async (username, email, password, rePassword) => {
    const currentUser = await User.findOne({ $or: [{ email }, { username }] })

    if (password !== rePassword) {
        throw new Error("Password dont match!");
    }

    if (currentUser) {
        throw new Error("User already exists!");
    }

    const newUser = await User.create({ username, email, password })
}
export default {
    register,
}
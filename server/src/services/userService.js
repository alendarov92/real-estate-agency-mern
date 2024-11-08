import User from '../models/User.js'


const register = (userData) => User.create(userData)

export default {
    register,
}
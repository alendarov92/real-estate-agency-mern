import React, { useContext, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import AuthContext from '../../contexts/authContext';

function Register() {

    const { registerSubmitHeandler } = useContext(AuthContext)

    const { values, onChange, onSubmit } = useForm(registerSubmitHeandler, {
        email: '',
        username: '',
        password: '',
        rePassword: '',
    });

    // const [email, setEmail] = useState('')
    // const [username, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    // const [rePassword, setRePassword] = useState('')



    // const registerUser = async (e) => {

    //     e.preventDefault();

    //     // const navigate = Navigate()

    //     try {
    //         const res = await fetch('http://localhost:3030/api/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 email,
    //                 username,
    //                 password,
    //                 rePassword,
    //             })
    //         });

    //         const data = res.json()
    //         console.log(data.user._id);

    //         // if (data.users._id) {
    //         //     navigate('/')
    //         // }

    //     } catch (error) {
    //        console.log(error); 
    //     }
    // }
    return (
        <main>
            <section id="register-page">
                <div className="boxs">
                    <div className="card-image">
                        <h2 className="card-heading">Create your account</h2>
                    </div>
                    <form className="card-form" onSubmit={onSubmit}>
                        <div className="input">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Example@ex.com"
                                onChange={onChange}
                                value={values.email}
                                id="name"
                                name="email"
                                defaultValue=""
                            />
                            <label className="name">Email</label>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="alexander"
                                onChange={onChange}
                                value={values.username}
                                id="username"
                                name="username"
                                defaultValue=""
                            />
                            <label className="username">Username</label>
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                className="input-field"
                                onChange={onChange}
                                value={values.password}
                                id="password"
                                name="password"
                                placeholder="******"
                            />
                            <label className="password">Password</label>
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                className="input-field"
                                onChange={onChange}
                                value={values.rePassword}
                                id="re-password"
                                name="rePassword"
                                placeholder="******"
                            />
                            <label className="re-password">Repeat Password</label>
                        </div>
                        <div className="action">
                            <button className="action-button">Get started</button>
                        </div>
                    </form>
                    <div className="card-info">
                        <small>
                            Already have an account?<Link to="/login"> Sign in</Link>
                        </small>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Register
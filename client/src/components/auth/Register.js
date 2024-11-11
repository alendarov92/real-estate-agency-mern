import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Register() {
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')



    const registerUser = async (e) => {
        
        try {
            e.preventDefault();
            const res = await fetch('http://localhost:3030/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                    rePassword,
                })
            });
            
            return <Navigate to='/' />
            

            
        } catch (error) {
           console.log(error); 
        }
    }
    return (
        <main>
            <section id="register-page">
                <div className="boxs">
                    <div className="card-image">
                        <h2 className="card-heading">Create your account</h2>
                    </div>
                    <form className="card-form" onSubmit={registerUser}>
                        <div className="input">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Example@ex.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
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
                                onChange={(e) => setUserName(e.target.value)}
                                value={username}
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
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
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
                                onChange={(e) => setRePassword(e.target.value)}
                                value={rePassword}
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
                            Already have an account?<a href="/login"> Sign in</a>
                        </small>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Register
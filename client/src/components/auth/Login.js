import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const loginHeandler = async (e) => {
        e.preventDefault();

        const {username, password} = Object.fromEntries(new FormData(e.target))
        
        try {
            const res = await fetch('http://localhost:3030/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password, 
                })
            });
            const data = res.json()
            console.log(data)
            
     
            

            
        } catch (error) {
           console.log(error); 
        }
    }
    return (
        <main>
            <section id="login-page" onSubmit={loginHeandler}>
                <div className="boxs">
                    <div className="card-image">
                        <h2 className="card-heading">Login</h2>
                    </div>
                    <form className="card-form" action="" method="post">
                        <div className="input">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="alexander"
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
                                id="password"
                                name="password"
                                placeholder="******"
                            />
                            <label className="password">Password</label>
                        </div>
                        <div className="action">
                            <button className="action-button">Login</button>
                        </div>
                    </form>
                    <div className="card-info">
                        <p>
                            Dont have an account?
                            <Link href="/register">Sign up</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Login
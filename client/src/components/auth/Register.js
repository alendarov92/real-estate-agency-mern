import React from 'react'

function Register() {
    
    return (
        <main>
            <section id="register-page">
                <div className="boxs">
                    <div className="card-image">
                        <h2 className="card-heading">Create your account</h2>
                    </div>
                    <form className="card-form" action="" method="post">
                        <div className="input">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Example@ex.com"
                                id="name"
                                name="emial"
                                defaultValue=""
                            />
                            <label className="name">Email</label>
                        </div>
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
                        <div className="input">
                            <input
                                type="password"
                                className="input-field"
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
                            Already have an account?<a href="#"> Sign in</a>
                        </small>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Register
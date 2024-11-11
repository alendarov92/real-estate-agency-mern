import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <meta charSet="UTF-8" />
            {/* Do not forget to change the path to the css file */}
            <title>Home Page</title>
            <link href="/css/style.css" type="text/css" rel="stylesheet" />
            <div id="box">
                {/* In case of error, you should display div with class "errorContainer" */}
                {/* You can choose to display the first error or all of them (error message/s in your opinion) */}
                {/*<div>
      <div class="errorContainer">
          <p>Error</p>
          </div>
          </div>*/}
                <nav>
                    <Link to="/">Home</Link>
                    <ul>
                        {/* Guest users and Logged users */}
                        <li>
                            <Link to="#">Housing for rent</Link>
                        </li>
                        {/* Guest users */}
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        {/* Logged users */}
                        <li>
                            <Link to="#">Create offer</Link>
                        </li>
                        <li>
                            <Link to="#">Search</Link>
                        </li>
                        <li>
                            <Link to="#">Logout</Link>
                        </li>
                    </ul>
                </nav>
                <footer>© 2021</footer>
            </div>
        </>
    )
}

export default Header
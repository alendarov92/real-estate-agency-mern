import React from 'react'

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
                    <a href="/">Home</a>
                    <ul>
                        {/* Guest users and Logged users */}
                        <li>
                            <a href="#">Housing for rent</a>
                        </li>
                        {/* Guest users */}
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/register">Register</a>
                        </li>
                        {/* Logged users */}
                        <li>
                            <a href="#">Create offer</a>
                        </li>
                        <li>
                            <a href="#">Search</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
                <footer>© 2021</footer>
            </div>
        </>
    )
}

export default Header
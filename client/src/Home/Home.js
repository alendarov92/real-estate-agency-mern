import React from 'react'

function Home() {
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
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">Register</a>
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
                <main>
                    <section id="home-page" className="background-image">
                        <div className="home-container">
                            <div className="info">
                                <h1>Discover Your Perfect Home</h1>
                                <h2>The Best Real Estate Deals</h2>
                            </div>
                        </div>
                    </section>
                    <section id="top-houses">
                        <h1>Top Houses</h1>
                        <div className="houses">
                            <div className="card-home">
                                <h2>Real House Luxury Villa</h2>
                                <div className="cta-container">
                                    <a href="#" className="details-link">
                                        Details
                                    </a>
                                </div>
                                <div className="card_image">
                                    <img src="/images/5.jpg" />
                                </div>
                            </div>
                            <div className="card-home">
                                <h2>House Take Away</h2>
                                <div className="cta-container">
                                    <a href="#" className="details-link">
                                        Details
                                    </a>
                                </div>
                                <div className="card_image">
                                    <img src="/images/house2.jpg" />
                                </div>
                            </div>
                            <div className="card-home">
                                <h2>Sunhouse C21</h2>
                                <div className="cta-container">
                                    <a href="#" className="details-link">
                                        Details
                                    </a>
                                </div>
                                <div className="card_image">
                                    <img src="/images/apartments.jpg" />
                                </div>
                            </div>
                            {/* If there are still no offers for housing in the database display: */}
                            {/*<div class="no-data-container">
                  <p class="no-data">There are no housing offers found...</p>
              </div>*/}
                        </div>
                    </section>
                </main>
                <footer>© 2021</footer>
            </div>
        </>

    )
}

export default Home
import React from "react";
import "../jumbotron/jumbotron_styles"

// Masthead

function Jumbotron() {
    return (
<header className="masthead">
    <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
                <h1 className="text-white font-weight-medium">Web Developer &<br /> UX/UI Designer</h1>
                <hr className="divider my-4" color="#408eff" />
            </div>
            <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Below are examples of deployed applications that I have developed & designed.
                    View the github link or Heroku page for further exploration.</p>
                <a href="#portfolio" id="portfolioBtn" className="btn btn-lg btn-outline-primarypx-4 js-scroll-trigger">My Portfolio</a>
            </div>
        </div>
    </div>
</header>

);
}

export default Jumbotron;
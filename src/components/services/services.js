import React from "react";
import "./services-styles.css"

// Services

function Services() {
    return (
<section class="page-section" id="services">
    <div class="container">
        <h2 class="text-center mt-0">Services & Portfolio</h2>
        <hr class="divider my-4" />
        <div class="row">
            <div class="col-lg-4 col-md-6 text-center">
                <div class="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-01.png" alt="icons" class="responsive"/>
                    <h3 class="h4 mb-2">Front End Development

                    </h3>
                    <p class="text-muted mb-0">Developing data into a graphical interface through the use of HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
                <div class="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-03.png" alt="icons" class="responsive"/>
                    <h3 class="h4 mb-2">UX & UI Design</h3>
                    <p class="text-muted mb-0">Creating products that provide meaningful and relevant experiences to users. This involves integration of design & usability.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
                <div class="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-02.png" alt="icons" class="responsive"/>
                    <h3 class="h4 mb-2">Back End Development</h3>
                    <p class="text-muted mb-0">Developing server side applications and everything that communicates between the database and the browser.</p>
                </div>
            </div>
            </div>
        </div>
</section>
);
}

export default Services;
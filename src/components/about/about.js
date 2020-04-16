import React from "react";
import "./about_styles.css"
// About Me 

function About() {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-center mt-0">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0">Brittany Morris is a Full-Stack Developer and UX/UI Designer. She is a graduate from the University
                        of Pennsylvania’s Coding Bootcamp where she obtained a certificate in full-stack web development. She has experience in front and
                        back end technologies such as JavaScript, HTML, CSS, SQL, React.js, jQuery, Bootstrap, MongoDB, Node.js, Express, and Handlebars.</p>
                            <div className="aboutMeButtons">
                                <a href="./assets/BrittanyMorris_Resume_2020.pdf" className="btn btn-outline-primary" id="viewResume" role="button">View Resume</a>
                                <a href="https://github.com/brittanymorrisdesign" className="btn btn-primary" id="githubRepo" role="button"><i className="fab fa-github"></i> Github Repo</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default About;
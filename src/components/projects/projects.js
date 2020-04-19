import React from "react";
import "./projects_styles.css"
// Projects

function Nav() {
    return (
      <section className="page-section bg-primary-portfolio" id="portfolio">
            <div className="row no-gutters">

                <div className="col-lg-4 col-sm-6">
                 <div className="card">
                    <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project1.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Weather Dashboard</h4>
                        <p className="card-text p-y-1">A weather dashboard application with search functionality to find current weather
                          conditions and the future weather outlook for multiple cities.</p>
                        <div className="twoButtons">
                          <a href="https://brittanymorrisdesign.github.io/Homework-6/" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-6" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML, CSS, Bootstrap, Javascript, jQuery, Server-side APIs</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project2.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Template Engine: Employees</h4>
                        <p className="card-text p-y-1">A software engineering team generator command line application
                          that prompts the user for information about their team manager and team members. </p>
                        <div className="twoButtons">
                          <a href="https://user-images.githubusercontent.com/44029053/74109597-c738a080-4b52-11ea-969a-ee9f906d035b.gif"
                            className="btn btn-outline-primary btn-sm" id="viewPage" role="button">View Demo</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-10" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, Javascript, npm modules</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project3.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">APPetizer Reciepe App</h4>
                        <p className="card-text p-y-1">A full-stack application that allows users to sign up, log in, search for
                          recipes, and save their favorite recipes to the application.</p>
                        <div className="twoButtons">
                          <a href="https://recipe-track.herokuapp.com/" className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Page</a>
                          <a href="https://github.com/kaydeejay/app-etizer" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, JavaScript, Handlebars.js, mySQL</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project6.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Traffic Jam</h4>
                        <p className="card-text p-y-1">A navigation application with features that revolve around
                          traveling to Pennovation Center for the coding bootcamp.</p>
                        <div className="twoButtons">
                          <a href="https://brianp22.github.io/Group-6-Project/index.html" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/brianp22/Group-6-Project" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML, CSS, Semantic UI Framework, JavaScript, jQuery</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project4.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Password Generator</h4>
                        <p className="card-text p-y-1">A random password generator that generates a random password based
                          on user-selected criteria.</p>
                        <div className="twoButtons">
                          <a href="https://brittanymorrisdesign.github.io/Homework-3/" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-3" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML5, CSS3, Bootstrap, Javascript, jQuery, Server-side APIs</div>
                      </div>
                    </div>
                  </div>
       
                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project5.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Burger Time</h4>
                        <p className="card-text p-y-1">A burger logger that lets users input the names of burgers they'd like to eat and also devour them.</p>
                        <div className="twoButtons">
                          <a href="https://peaceful-ocean-40242.herokuapp.com" className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Page</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-13" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, Express.js, Handlebars.js, Javascript, mySQL</div>
                      </div>
                    </div>
                  </div>
        
                    <div className="col-lg-4 col-sm-6">
                      <div className="card">
                        <div className="card-block">
                          <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project10.png" alt="Weather Dashboard"/>
                          <h4 className="card-title">Online/Offline Budget Tracker</h4>
                          <p className="card-text p-y-1">A fast and easy way to track money, and accessing that information anytime online or offline. </p>
                          <div className="twoButtons">
                            <a href="https://banana-pie-87432.herokuapp.com/" className="btn btn-outline-primary btn-sm" id="viewPage"
                              role="button">View Page</a>
                            <a href="https://github.com/brittanymorrisdesign/Homework-18" className="btn btn-primary btn-sm"
                              id="githubRepo" role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                          </div>
                          <div className="builtWith">JavaScript, Express.js, Node.js, Mongoose, IndexedDB </div>
                        </div>
                      </div>
                    </div>
               
                    <div className="col-lg-4 col-sm-6">
                      <div className="card">
                        <div className="card-block">
                          <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project11.png" alt="Weather Dashboard"/>
                          <h4 className="card-title">Employee Directory</h4>
                          <p className="card-text p-y-1">The ability to view non-sensitive data about employees in a company, particularly by their first or last name.</p>
                          <div className="twoButtons">
                            <a href="https://quiet-oasis-04144.herokuapp.com/" className="btn btn-outline-primary btn-sm"
                              id="viewPage" role="button">View Page</a>
                            <a href="https://github.com/brittanymorrisdesign/Homework-19" className="btn btn-primary btn-sm"
                              id="githubRepo" role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                          </div>
                          <div className="builtWith">React.js, JavaScript, Bootstrap, HTML, CSS</div>
                        </div>
                      </div>
                    </div>
               
                    <div className="col-lg-4 col-sm-6">
                      <div className="card">
                        <div className="card-block">
                          <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project9.png" alt="Weather Dashboard"/>
                          <h4 className="card-title">Workout Tracker</h4>
                          <p className="card-text p-y-1">A workout tracker using Mongo database with a Mongoose schema to handle routes with Express.</p>
                          <div className="twoButtons">
                            <a href="https://github.com/brittanymorrisdesign/Homework-17" className="btn btn-outline-primary btn-sm"
                              id="viewPage" role="button">View Page</a>
                            <a href="https://safe-dawn-57497.herokuapp.com/?id=5e7f83b72881e70017ab98d0" className="btn btn-primary btn-sm" id="githubRepo"
                              role="button"><i className="fab fa-github"></i> Github Repo</a>
                          </div>
                          <div className="builtWith">JavaScript, Node.js, Express, MongoDB, Mongoose</div>
                        </div>
                      </div>
                    </div>
         
                   <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project8.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Note Taker</h4>
                        <p className="card-text p-y-1">An application that can be used to write, save, and delete notes from the user. This app uses an express backend and saves and retrieves data from a JSON file.</p>
                        <div className="twoButtons">
                          <a href="https://salty-forest-70625.herokuapp.com" className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Page</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-11" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, JavaScript, Express.js, npm modules </div>
                      </div>
                    </div>
                  </div>
            
                   <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project7.png" alt="Weather Dashboard"/>
                        <h4 className="card-title">Trivia Quiz</h4>
                        <p className="card-text p-y-1"> A timer-based trivia quiz application that stores high scores client-side.
                          The score is calculated by correct or incorrect answers, along with the remaining time.</p>
                        <div className="twoButtons">
                          <a href="https://brittanymorrisdesign.github.io/Homework-4/" className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Demo</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-4" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">JavaScript, HTML, CSS, Bootstrap</div>
                      </div>
                    </div>
                  </div>
              
                    <div className="col-lg-4 col-sm-6">
                      <div className="card">
                        <div className="card-block">
                          <img className="card-img-top" src="./assets/img/portfolio/thumbnails/project12.png" alt="Weather Dashboard"/>
                          <h4 className="card-title">Work Day Scheduler</h4>
                          <p className="card-text p-y-1">An application that displays timeblocks for standard business hours. Timeblock contains 
                              an input field and save button, and input text is saved in local storage.</p>
                          <div className="twoButtons">
                            <a href="https://brittanymorrisdesign.github.io/Homework-5/" className="btn btn-outline-primary btn-sm" id="viewPage"
                             role="button">View Demo</a>
                            <a href="https://github.com/brittanymorrisdesign/Homework-5" className="btn btn-primary btn-sm"
                              id="githubRepo" role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">JavaScript, HTML, CSS, Bootstrap</div>
                      </div>
                    </div>
                </div>
            </div>
          </section>
        );
}

export default Nav;
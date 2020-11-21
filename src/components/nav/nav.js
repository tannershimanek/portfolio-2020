import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { VscHome , VscGithub } from "react-icons/vsc";
import { RiLinkedinFill , RiFacebookFill, RiGithubLine, RiTwitterFill, RiDiscordFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import {
    Route,
    Link,
    BrowserRouter as Router
  } from "react-router-dom"
import homePage from '../../pages/home/home.js';
import contactPage from '../../pages/contact/contact.js';
import aboutPage from '../../pages/about/about.js';
import projectsPage from '../../pages/projects/projects.js';
import skillsPage from '../../pages/skills/skills.js';


const Navigation = () => {
    // turn into a hamburger menu when in mobile
    // fix responsive issues
    // decide what icons and contact info to add 
    return (
            <div>
                <Router>

                    <Navbar expand="lg" variant="light" bg="light">
                        {/* switch Navbar.Brand to Nav.link */}
                    <Navbar.Brand>
                            <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/projects">Projects</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
    
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/contact"><VscGithub/></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact"><RiLinkedinFill/></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact"><RiFacebookFill/></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact"><RiGithubLine/></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact"><RiTwitterFill/></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact"><SiDiscord/></Link>
                        </Nav.Link>
                    </Nav>
                    </Navbar>



                    <Route exact path="/" component={homePage}/>
                    <Route path="/contact" component={contactPage}/>
                    <Route path="/about" component={aboutPage}/>
                    <Route path="/projects" component={projectsPage}/>
                    <Route path="/skills" component={skillsPage}/>
                </Router>
            </div>
    );
};

export default Navigation;
import React from 'react';
import CardSmall from '../../components/card-sm/card-sm.js';
import CardMedium from '../../components/card-md/card-md.js'
import { VscAccount, VscFileCode } from "react-icons/vsc";
import { TiStarburstOutline } from "react-icons/ti";
import { RiGithubLine, RiLinkedinLine, RiTwitterLine, RiAccountBoxFill, RiArrowRightLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import code3 from '../../images/code3.svg';
import Button from 'react-bootstrap/esm/Button';



const homePage = () => {

    return (
        <div>
            {/* <Container className="mx-auto mt-3">
                <h2>Tanner Shimanek</h2>
                <p className="ml-2">Software Engineer</p>
                <br />
            </Container> */}

            <Container className="mt-4">
            <Row className="py-5 bg-light">
                <Col className="col-6 align-self-center">
                    <div className="ml-3 card-block">
                    <h1 className="mb-4"><strong>Tanner Shimanek</strong> <br />Software Engineer</h1>
                    
                    <Button className="mt-2 mb-4" href="#about">
                        <svg className="" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                        </svg> 
                        <span className="pl-2">About me </span></Button>
                    {/* <h4><a href="#"><RiGithubLine/></a> <a href="#"><RiLinkedinLine/></a> <a href="#"><RiTwitterLine/></a></h4> */}
                    </div>
                </Col>
                <Col >
                {/* <a href='https://www.freepik.com/vectors/design'>Design vector created by freepik - www.freepik.com</a> */}
                <div className="d-flex justify-content-center">
                    <img src={code3} style={{ height: '310px'}} className="d-flex justify-content-center" alt="dev-img"/>
                </div>
                </Col>
            </Row>
            </Container>

            <Container className="mx-auto mt-3">
                <a id="about"></a>
                <h2>About</h2>
                <p className="ml-2 ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Container>

            <Container className="h-25 mt-5">
                <Row>
                    <Col sm className="mb-2">
                        <a href="/projects">
                        <CardSmall 
                            icon={<VscAccount />}
                            info='Projects'/>
                        </a>
                    </Col>
                    <Col className="mb-2">
                        <CardSmall 
                            icon={<VscFileCode />}
                            info='Skills'
                            />
                    </Col>
                    <Col sm className="mb-2" >
                        <a href='/skills'>
                        <CardSmall 
                            color={'text-primary'}
                            icon={<TiStarburstOutline />}
                            info='Experience'
                            />
                        </a>
                    </Col>
                </Row>
            </Container>

            <Container className="mx-auto mt-5 mb-3 h-100">
                <Row>
                    <Col md>
                        <h4>Experience</h4>
                            <CardMedium 
                                info={
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                }
                            />
                    </Col>
                    <Col md>
                        <h4>My Education</h4>
                            <CardMedium 
                                info={
                                    <div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    }
                            />
                    </Col>
                </Row>
            </Container>

            <Container className="mx-auto">
                <h3>Some info</h3>
                <p className="ml-2 ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Container>

        </div>
    );
};

export default homePage;
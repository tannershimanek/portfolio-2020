import React from 'react';
import CardSmall from '../../components/card-sm/card-sm.js';
import CardMedium from '../../components/card-md/card-md.js'
import { VscAccount, VscFileCode } from "react-icons/vsc";
import { TiStarburstOutline } from "react-icons/ti";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import code3 from '../../images/code3.svg';



const homePage = () => {

    return (
        <div>
            <Container className="mx-auto mt-3">
                <h2>Home Page</h2>
                <p>This site is under construction and im too lazy to make a new git branch.</p>
            </Container>

            <Container >
            <Row className="py-3 bg-light">
                <Col>
                    <div className="text-center">
                    <h2>Tanner Shimanek</h2>
                    <p>This site is under construction and im too lazy to make a new git branch.</p>
                    </div>
                </Col>

                <Col className="">
                {/* <a href='https://www.freepik.com/vectors/design'>Design vector created by freepik - www.freepik.com</a> */}
                <img src={code3} style={{ height: '300px'}} alt="dev-img"/>
                </Col>
            </Row>
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
                        <CardSmall 
                            color={'text-primary'}
                            icon={<TiStarburstOutline />}
                            info='Experience'
                            />
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
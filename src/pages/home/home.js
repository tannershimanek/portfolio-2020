import React from 'react';
import CardSmall from '../../components/card-sm/card-sm.js';
import { VscAccount, VscFileCode } from "react-icons/vsc";
import { TiStarburstOutline } from "react-icons/ti";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const homePage = () => {

    return (
        <div>
            <Container className="mx-auto">
                <h2>Home Page</h2>
                <p>This site is under construction and im too lazy to make a new git branch.</p>
            </Container>
            

            <Container className="mw-25">
                <Row>
                    <Col>
                        <a href="/projects">
                        <CardSmall 
                            icon={<VscAccount />}
                            info='Projects'/>
                        </a>
                    </Col>
                    <Col>
                        <CardSmall 
                            icon={<VscFileCode />}
                            info='Skills'
                            />
                    </Col>
                    <Col>
                        <CardSmall 
                            color={'text-primary'}
                            icon={<TiStarburstOutline />}
                            info='Experience'
                            />
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
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
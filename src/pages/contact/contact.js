import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from '../../components/contact-form/contactForm.js'
import { ImPhone } from 'react-icons/im';
import { MdEmail } from "react-icons/md";


const contactPage = (prop) => {
    // TODO: Fix line spacing 
    // TODO: Lots of custom CSS
    return (
        <div>
            <h2>Contact Me</h2>
            <p>Feel Free to Contact Me Any Time</p>

            <Container>

                <Row>
                    <Col className="bg-light" xs={12} md={8}>
                        <ContactForm />
                    </Col>

                    <Col xs={6} md={4}>
                        <h3>Let's talk about work!</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book.</p>
                        <p><strong>Phone:</strong></p>
                        <p><ImPhone className="text-primary"/> (801)-123-4567</p>
                        <p><strong>Email:</strong></p>
                        <p><MdEmail className="text-primary"/> placeholder.dev@gmail.com</p>
                    </Col>
                </Row>

            </Container>

        </div>

    );
};

export default contactPage;
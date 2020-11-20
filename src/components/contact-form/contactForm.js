import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RiSendPlaneFill } from "react-icons/ri";

const ContactForm = (props) => {
        // TODO: allow member to send email from here to my email
    return (
        <Form>
            <Form.Group controlId="formGroupName">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="Name" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control type="Email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formGroupSubject">
                {/* <Form.Label>Subject</Form.Label> */}
                <Form.Control type="Subject" placeholder="Subject" />
            </Form.Group>

            <Form.Group controlId="formGroupTextarea">
                {/* <Form.Label>Message</Form.Label> */}
                <Form.Control as="textarea" placeholder="Message" rows={4} />
            </Form.Group>

            <Button><RiSendPlaneFill/> Send Message</Button>
        </Form>
    );
};

export default ContactForm;
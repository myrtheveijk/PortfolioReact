import React from 'react';
import { Container, Button } from 'reactstrap'; 
import Form from 'react-bootstrap/Form'; 

export const Contact = () => {
    return (
        <>
            <div className="App-header header-page">
                <h1>Contact</h1>
            </div>   

            <Container>
                    <div className="col-contact">
                        <Form action="/" method="_POST">
                            <Form.Group>
                                <Form.Label>Naam *</Form.Label>
                                <Form.Control type="text" placeholder="Jouw naam..." required="true" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email adres *</Form.Label>
                                <Form.Control type="email" placeholder="Jouw email adres..." required="true" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Bericht *</Form.Label>
                                <Form.Control as="textarea" rows="3" required="true"/>
                            </Form.Group>

                            <Button className="btn-contact" type="submit">
                                Versturen
                            </Button>
                        </Form>
                    </div>
            </Container>
        </>
    )
}

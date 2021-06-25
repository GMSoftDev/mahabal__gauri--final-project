//import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap'
import picture from "./images/Gauri.jpg"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return (
        <Container className="h=100">
            <Row className="my-5">
                <Col>
                    <section id="introduction">
                        <Card color="secondary">
                            <CardBody>
                                <CardTitle tag="h4" className="text-left" color="#0d6efd;">
                                    Gauri Mahabal
                                    <a href="https://www.linkedin.com/in/gauri-mahabal-4b75235" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <div className="m-2">
                            <img id="img-profile" src={picture} alt="Profile picture Gauri Mahabal" className="m-2 w-80 h-80" />
                        </div>
                        <h3 id="profession">Full Stack Web Developer</h3>
                    </section>
                </Col>
                <Col lg="7">
                    <h1 className="font-weight-light text-center">About</h1>

                    <Card className="text-white bg-secondary my-5 py-4 text-center">
                        <CardBody>
                            <CardText>
                                <p>I am a Full-Stack Developer experienced in all aspects of web design and development.</p>
                                <p>Get in touch to dicuss the requirements for all your upcoming web projects.</p>
                                <p className="text-white m-0">I am a quick message away!</p>
                            </CardText>

                        </CardBody>
                    </Card>
                    <Button color="primary" href='./contact' >Send a Message</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
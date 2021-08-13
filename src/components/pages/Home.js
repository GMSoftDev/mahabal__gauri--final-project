//import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import picture from "./images/Gauri.jpg"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return (
        <Container>
            < Row className="my-2" >
                <Col>
                    <section id="introduction">
                        <Card color="transparent" style={{ border: 0 }}>
                            <CardBody>
                                <CardTitle tag="h4" className="text-left" color="#0d6efd;">
                                    <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                                        <div style={{ textAlign: 'right', justifyContent: 'flex-end' }}><a href="https://www.linkedin.com/in/gauri-mahabal-4b75235" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin} size="lg" className="linkedin" /></a></div>
                                    </div>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </section>
                </Col>
            </Row >
            <Row className="my-2">
                <Col >
                    <section id="details" className="justify-center">
                        <div className="m-2" >
                            <div style={{ textAlign: 'left', justifyContent: 'flex-end' }}><img src="GMLogo.png" alt="Logo" width="100" height="100" style={{ verticalAlign: 'top' }} /><img id="img-profile" src={picture} alt="Profile of Gauri Mahabal" className="m-2 w-80 h-80" /></div>
                            <h2 className="text-right">Gauri Mahabal  </h2>
                        </div>
                        <div >
                            <h3 id="profession" className="text-center">Full Stack Web Developer</h3>
                        </div>
                    </section>
                </Col>
                <Col lg="7" className="bg-primary mb-2 py-4">
                    <Card className="text-white bg-secondary my-3 py-3 text-center">
                        <CardTitle><h1 className="font-weight-light text-center">About</h1></CardTitle>
                        <CardBody>
                            <CardText>
                                I am a Full-Stack Developer experienced in all aspects of web design and development.
                            </CardText>
                            <CardText>
                                Get in touch to dicuss the requirements for all your upcoming web projects.
                            </CardText>
                            <CardText>
                                I am a quick message away!
                            </CardText>
                            <CardText><Button color="primary" href='./contact' >Send a Message</Button></CardText>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Card color="transparent" style={{ border: 0 }} className="mb-2 py-4">
                        <CardTitle></CardTitle>
                        <CardBody>
                            <CardText></CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Home
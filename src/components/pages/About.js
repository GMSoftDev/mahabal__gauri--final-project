//import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import picture from "./images/Gauri.jpg"

const About = () => {
    return (
        <Container>
            <Row className="my-5" xs="2">
                <Col lg="5">
                    <Container>
                        <Row className="my-5" xs="1">
                            <Col>
                                <section id="introduction">
                                    <h2 id="Name">Gauri Mahabal </h2>
                                    <div>
                                        <img id="img-profile" src={picture} alt="Profile picture Gauri Mahabal" />
                                    </div>
                                    <h3 id="profession">Full Stack Web Developer</h3>
                                </section>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg="7">
                    <Container>
                        <Row className="my-5" xs="1">
                            <Col>
                                <section id="Description">
                                    <div>
                                        {/* <!--Brief introduction--> */}
                                        <h2>About me</h2>
                                        <p>I am an experienced application and web developer who has worked on enterprise and web applications for reputed companies and various industries.</p>
                                        <p>I would like to  apply my skills in various technology stacks to your upcoming projects.</p>
                                    </div>
                                </section>
                            </Col>
                        </Row>

                    </Container>
                </Col>
                {/*         <Row className="my-5">
            <Col lg="7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
            </Col>
            <Col lg="5">
                <h1 className="font-weight-light">About Me</h1>
                <p>Some interesting stuff about me. More things, maybe a bit more here. </p>
                <Button color="primary" href="/contact">Contact Me</Button>
    </Col>*/}
            </Row>
        </Container >
    )
}

export default About
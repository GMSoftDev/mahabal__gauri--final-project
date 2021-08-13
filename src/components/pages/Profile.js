//import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardFooter } from 'reactstrap'

const Profile = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md="4" className="mb-5">
                    <h2>COMPANY</h2>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md="4" className="mb-5">
                    <Card style={{ height: "100%" }}>
                        <CardBody>
                            <CardTitle>
                                <h3>BANCTEC</h3>
                            </CardTitle>
                            <CardBody>
                                <h4>PROGRAMMER ANALYST/DEVELOPER</h4>
                                <p>Developed applications for Government clients like Vetrans Affairs Canada,DND</p>
                            </CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">More details..</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <h3>IBI GROUP</h3>
                            </CardTitle>
                            <CardBody>
                                <h4>SOFTWARE DEVELOPER</h4>
                                <p>Managed the Design,development and configuration of a Reporting application for Mineapolis Airport Commission</p>
                            </CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">More details..</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle color="primary">
                                <h3>SYSTEMWARE INNOVATIONS</h3>
                            </CardTitle>
                            <CardBody>
                                <h4>TECHNICAL CONSULTANT</h4>
                                <p>Worked on a resourse balancing tool for Ontario Power Generation to balance employee resources at various sites for a given work week</p>
                            </CardBody>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">More details..</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md="4" className="mb-5">
                    <h2>PROJECTS</h2>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle color="primary">
                                <h3>CENTERVISION</h3>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle color="primary">
                                <h3>MAVIS</h3>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle color="primary">
                                <h3>RBT</h3>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle color="primary">
                                <h3>UPMM</h3>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/*         <Row className="my-5">
            <Col lg="7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
            </Col>
            <Col lg="5">
                <h1 className="font-weight-light">About Me</h1>
                <p>Some interesting stuff about me. More things, maybe a bit more here. </p>
                <Button color="primary" href="/contact">Contact Me</Button>
            </Col>
        </Row> */}
        </Container >
    )
}

export default Profile
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="py-0 mt-10 bg-secondary">
            <Container>
                <Row>
                    <Col>
                        <div class="email" className="m-0 text-left text-white">
                            <p>Reach me at  <a href="mailto:gauri.mahabal@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /> <em>gauri.mahabal@gmail.com</em></a></p>
                        </div>

                    </Col>
                    <Col>
                        <div class="copyright">
                            <p className="m-0 text-end text-bottom text-white">Copyright &copy; Gauri Mahabal 2021</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
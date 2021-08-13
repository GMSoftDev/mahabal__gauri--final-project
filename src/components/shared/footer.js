import { Container, Row, Col } from 'reactstrap'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
    return (
        <footer className="py-0 mt-10 bg-secondary">
            <Container>
                <Row>
                    <Col>
                        <div className=" email m-0 text-left text-white">
                            <p>Reach me at  <a href="mailto:gauri.mahabal@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" className="myemail" /> <em>gauri.mahabal@gmail.com</em></a></p>
                        </div>
                    </Col>
                    <Col>
                        <div className="copyright">
                            <p className="m-0 text-end text-bottom text-white">Copyright &copy; Gauri Mahabal {props.year}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
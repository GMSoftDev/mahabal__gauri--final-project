import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'

const Register = () => {
    let history = useHistory();
    let location = useLocation();
    let [message, setMessage] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [registered, setRegister] = useState(true)

    const registerSubmit = async event => {

        event.preventDefault()
        const response = await fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name, "email": username, "password": password })
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setRegister(false)
            message = payload.message + ' ' + payload.invalid.join(' ');
            setMessage(message);
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">Register a new user !</CardText>
                </CardBody>
            </Card>
            {!registered &&
                <Card className="text-white bg-primary my-5 py-4 text-center">
                    <CardBody>
                        <CardText className="text-white m-0">
                            <p>User could not be registered, please try again</p>
                        </CardText>
                    </CardBody>
                </Card>
            }
            <Form className="my-5" onSubmit={registerSubmit}>
                <Row form>
                    <Col md={6}>
                        <p className="bg-danger text-white">{message}</p>
                    </Col>
                    <Col md={6}>
                        <FormGroup className="mb-2">
                            <Label for="nameEntry" className="mb-2">Name</Label>
                            <Input type="text" name="name" id="nameEntry" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup className="mb-2">
                            <Label for="usernameEntry" className="mb-2">Username</Label>
                            <Input type="text" name="username" id="usernameEntry" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup className="mb-4">
                            <Label for="passwordEntry" className="mb-2">Password</Label>
                            <Input type="password" name="password" id="passwordEntry" placeholder="Valid password" onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="primary" className="float-right">Register</Button>
            </Form>
            <Card color="transparent" style={{ border: 0 }} className="mb-2 py-4">
                <CardTitle> </CardTitle>
                <CardBody>
                    <CardText> </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Register
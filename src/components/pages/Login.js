import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)
    let curLocation = location.state.from.pathname
    let user = "User"
    if (curLocation == "/admin") {
        user = "Admin"
    }
    const loginSubmit = async event => {

        event.preventDefault()
        const response = await fetch('http://localhost:3001/users/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": username, "password": password })
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardTitle>{user} Login</CardTitle>
                <CardBody>
                    <CardText>Please enter your login credentials</CardText>
                </CardBody>
            </Card>
            {!auth &&
                <Card className="text-white bg-primary my-5 py-4 text-center">
                    <CardBody>
                        <CardText className="text-white m-0">Invalid credentials, please try again</CardText>
                    </CardBody>
                </Card>
            }
            <Form className="my-5" onSubmit={loginSubmit}>
                <Row form>
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
                <Button color="primary" className="float-right">Sign in</Button>
            </Form>
            <Card color="transparent" style={{ border: 0 }} className="mb-2 py-4">
                <CardTitle></CardTitle>
                <CardBody>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Login
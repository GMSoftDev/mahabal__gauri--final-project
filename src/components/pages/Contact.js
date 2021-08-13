import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormGroup, Row, Col, Input, Label, Button, Container, CardBody, Card, CardText, CardTitle } from 'reactstrap'



const Contact = () => {
    const [contact, setState] = useState({ name: "", email: "", phoneNumber: "", content: "" })
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const history = useHistory()

    const formSubmit = async event => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/contact_form/entries/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phoneNumber, content })
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
            setName("")
            setEmail("")
            setPhoneNumber("")
            setContent("");
            history.push("/contact")

        }
    }

    return (
        <Container>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">Use this form to reach out to me, I'll be happy to assist you!</CardText>
                </CardBody>
            </Card>
            <Form className="my-5" onSubmit={formSubmit}>
                <FormGroup row className="mb-2">
                    <Label for="nameEntry" sm={2}>Full Name</Label>
                    <Col sm={10}>
                        <Input type="name" name="name" id="nameEntry" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="emailEntry" placeholder="Enter email to contact" required value={email} onChange={e => setEmail(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="phoneEntry" sm={2}>Phone Number</Label>
                    <Col sm={10}>
                        <Input type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="messageEntry" sm={2}>Message</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="messageEntry" required className="sm" value={content} onChange={e => setContent(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Label for="sendEntry" sm={2}></Label>
                    <Col sm={{ size: 20, offset: 2 }}>
                        <Button color="primary">Send Message</Button>
                    </Col>
                </FormGroup>
            </Form>
            <Row>
                <p></p>
            </Row>
            <Card className="text-white bg-primary my-2 py-1 text-center">
                <CardBody>
                    <CardTitle>We can also be reached at</CardTitle>
                    <CardText className="text-white m-0">
                        <p>Address:1 Bay Street,Toronto,ON</p>
                        <p>Phone:647-999-999</p>
                    </CardText>
                </CardBody>
            </Card>
        </Container >
    )
}

export default Contact
import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'
import { useHistory } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Projects = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [projects, setProjects] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3001/projects/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            //console.log(data);
            setProjects(data)
            //console.log(listing)
        }
        getData()
    }, [token])
    return (
        <Container style={{ paddingTop: "3rem" }}>
            <Row>
                <h1>Following projects are added </h1>
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Technology</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No projects added</i></td></tr>
                    }
                    {projects.length > 0 &&
                        projects.map((entry, index) => <tr><td>{index + 1}</td><td>{entry.name}</td><td>{entry.description}</td><td>{entry.technology}</td></tr>)
                    }
                </tbody>
            </Table>
            <Row className="my-5">
                <Button onClick={logout} color="primary">Logout</Button>
            </Row>
        </Container>
    )
}

export default Projects
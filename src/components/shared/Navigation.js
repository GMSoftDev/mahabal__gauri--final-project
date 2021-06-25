//import React, { useState } from 'react'
import { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'



const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar dark color="secondary" bg-navbar expand="md" fixed="top">
            <Container>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/" onClick={isOpen && toggle}>Home</NavLink>
                        </NavItem>
                        {/*                         <NavItem>
                            <NavLink tag={RouteLink} to="/about" onClick={toggle}>About Me</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink tag={RouteLink} to="/profile" onClick={isOpen && toggle}>Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/contact" onClick={isOpen && toggle}>Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/submissions" onClick={isOpen && toggle}>Submissions</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarBrand href="">
                </NavbarBrand>
            </Container>
        </Navbar >
    )
}

export default Navigation
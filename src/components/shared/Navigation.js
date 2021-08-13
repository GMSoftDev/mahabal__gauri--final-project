//import React, { useState } from 'react'
import { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'



const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleLink = () => { isOpen && setIsOpen(!isOpen) }
    const toggle = () => { setIsOpen(!isOpen) }

    return (
        <Navbar className="navbar-custom" expand="md" fixed="top">
            <Container>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/" onClick={toggleLink}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/profile" onClick={toggleLink}>Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/contact" onClick={toggleLink}>Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/register" onClick={toggleLink}>Register</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={RouteLink} to="/submissions" onClick={toggleLink}>Submissions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/admin" onClick={toggleLink}>Admin</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarBrand href=""></NavbarBrand>
            </Container>
        </Navbar >
    )
}

export default Navigation
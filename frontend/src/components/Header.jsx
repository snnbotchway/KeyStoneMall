import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">KEYSTONE MALL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/cart">
                                Cart
                                <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i>
                            </Nav.Link>
                            <Nav.Link href="/login">
                                Login
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default header;

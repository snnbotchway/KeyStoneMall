import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

import { userLogout } from "../actions/userActions";

function header() {
    const loginScreenInfo = useSelector(state => state.loginScreenInfo);
    const { userInfo } = loginScreenInfo;

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLogout());
    };

    return (
        <header className="mb-4">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>KEYSTONE MALL</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>
                                    Home
                                    <i className="fa-solid fa-house mx-1"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    Cart
                                    <i
                                        className="fa fa-shopping-cart mx-1"
                                        aria-hidden="true"
                                    ></i>
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown
                                    title={userInfo.first_name}
                                    id="name"
                                >
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        Login
                                        <i
                                            className="fa fa-user mx-1"
                                            aria-hidden="true"
                                        ></i>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default header;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, Form, Button, Col, Row } from "react-bootstrap";

import { userRegister, userLogin } from "../actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

function SignUpScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const registerScreenInfo = useSelector(state => state.registerScreenInfo);
    const { loading, error } = registerScreenInfo;

    const loginScreenInfo = useSelector(state => state.loginScreenInfo);
    const { userInfo } = loginScreenInfo;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setMessage("Passwords do not match");
        } else {
            dispatch(userRegister(firstName, lastName, email, password));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo]);

    return (
        <Container
            style={{
                maxWidth: "600px",
            }}
        >
            <h1>Sign Up</h1>
            {error && <Message variant="danger" message={error} />}
            {message && <Message variant="danger" message={message} />}
            {loading && <Loader />}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        placeholder="Enter first name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        placeholder="Enter Last name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password2}
                        onChange={event => setPassword2(event.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <Row className="mt-3">
                <Col>
                    Already have an account?{" "}
                    <Link to={redirect ? `/login?=${redirect}` : "/login"}>
                        Log In
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpScreen;

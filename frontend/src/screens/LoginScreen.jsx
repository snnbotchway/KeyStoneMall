import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, Form, Button, Col, Row } from "react-bootstrap";

import { userLogin } from "../actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const loginScreenInfo = useSelector(state => state.loginScreenInfo);
    const { userInfo, loading, error } = loginScreenInfo;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(userLogin(email, password));
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
            <h1>Sign In</h1>
            {error && <Message variant="danger" message={error} />}
            {loading && <Loader />}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Enter email"
                        required
                    />
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row className="mt-3">
                <Col>
                    Don't have an account?{" "}
                    <Link
                        to={redirect ? `/register?=${redirect}` : "/register"}
                    >
                        Register
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginScreen;

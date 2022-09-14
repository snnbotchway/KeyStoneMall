import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form, Button, Col, Row } from "react-bootstrap";

import { userUpdate } from "../actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

function ProfileScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginScreenInfo = useSelector(state => state.loginScreenInfo);
    const { userInfo } = loginScreenInfo;

    const updateScreenInfo = useSelector(state => state.updateScreenInfo);
    const { loading, error } = updateScreenInfo;

    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setMessage("Passwords do not match");
            setTimeout(() => {
                setMessage("");
            }, 5000);
        } else {
            await dispatch(userUpdate(firstName, lastName, email, password));
            setMessage("");
        }
    };

    useEffect(() => {
        if (!userInfo) {
            navigate("/login");
        } else {
            setFirstName(userInfo.first_name);
            setLastName(userInfo.last_name);
            setEmail(userInfo.email);
        }
    }, [userInfo, dispatch]);
    return (
        <Row>
            <Col md={5}>
                <h1>UPDATE PROFILE</h1>
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
                            required={password2}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password2}
                            onChange={event => setPassword2(event.target.value)}
                            required={password}
                        />
                    </Form.Group>
                    {error && <Message variant="danger" message={error} />}
                    {message && <Message variant="danger" message={message} />}
                    <Button className="mb-5" variant="primary" type="submit">
                        UPDATE PROFILE
                    </Button>
                </Form>
            </Col>
            <Col md={7}>
                <h1>Orders</h1>
            </Col>
        </Row>
    );
}

export default ProfileScreen;

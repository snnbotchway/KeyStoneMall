import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, Form, Button, Col, Row } from "react-bootstrap";
import CountrySelect from "react-bootstrap-country-select";

import { userRegister } from "../actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

function ShippingScreen() {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginScreenInfo = useSelector(state => state.loginScreenInfo);
    const { userInfo } = loginScreenInfo;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(country.name);
    };

    useEffect(() => {
        if (!userInfo) {
            navigate("/login");
        }
    }, [userInfo]);

    return (
        <Container
            style={{
                maxWidth: "600px",
            }}
        >
            <h1>Shipping</h1>
            {/* {error && <Message variant="danger" message={error} />}
            {message && <Message variant="danger" message={message} />}
            {loading && <Loader />} */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                        placeholder="Enter Address"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        value={city}
                        onChange={event => setCity(event.target.value)}
                        placeholder="Enter City"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type="number"
                        value={postalCode}
                        onChange={event => setPostalCode(event.target.value)}
                        placeholder="Enter Postal Code"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Form.Label>Country</Form.Label>
                    <CountrySelect value={country} onChange={setCountry} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    CONTINUE
                </Button>
            </Form>
        </Container>
    );
}

export default ShippingScreen;

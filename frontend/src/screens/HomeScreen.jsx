import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productActions";

import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
    const dispatch = useDispatch();
    const homeScreenInfo = useSelector(state => state.homeScreenInfo);
    const { loading, error, products } = homeScreenInfo;

    useEffect(() => {
        dispatch(listProducts());
    }, []);

    return (
        <div>
            <h2>TAKE A PICK</h2>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message message={error} variant="danger" />
            ) : (
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default HomeScreen;

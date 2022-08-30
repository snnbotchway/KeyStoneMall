import React from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

function HomeScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const { data } = await axios.get("/api/products/");
            setProducts(data);
            console.log("got data from django");
        }
        getProducts();
    }, []);

    return (
        <div>
            <h2>TAKE A PICK</h2>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HomeScreen;

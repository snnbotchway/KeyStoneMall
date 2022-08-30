import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
    Col,
    Row,
    Image,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getProduct() {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        }
        getProduct();
    }, []);

    return (
        <div>
            <Link className="btn btn-light mb-3" to="/">
                Go Back
            </Link>

            <Row>
                <Col sm={12} md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col sm={6} md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem as="h3">{product.name}</ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                className="rating"
                                text={` (${product.numReviews} reviews)`}
                                color={"#f8e825"}
                                value={product.rating}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <span style={{ fontWeight: "bold" }}>
                                Price: GHc{product.price}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col sm={6} md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col md={5}>Price:</Col>
                                    <Col md={7}>
                                        <span style={{ fontWeight: "bold" }}>
                                            {product.price}
                                        </span>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col md={5}>Status:</Col>
                                    <Col md={7}>
                                        {product.countInStock > 0
                                            ? `${product.countInStock} left`
                                            : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <Button
                                disabled={product.countInStock === 0}
                                type="button"
                                className="btn-block m-3"
                            >
                                ADD TO CART
                            </Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetail;

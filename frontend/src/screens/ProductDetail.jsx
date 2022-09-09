import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetail } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

import {
    Col,
    Row,
    Image,
    ListGroup,
    Form,
    Button,
    Card,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductDetail() {
    const dispatch = useDispatch();
    const productScreenInfo = useSelector(state => state.productScreenInfo);
    const { loading, error, product } = productScreenInfo;
    const { id } = useParams();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        dispatch(addToCart(id, qty));
        navigate("/cart");
    };

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, []);

    return (
        <div>
            <div>
                <Button className="btn btn-light mb-3" onClick={goBack}>
                    Go Back
                </Button>
            </div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger" message={error} />
            ) : (
                <Row>
                    <Col sm={12} md={6}>
                        <Image src={product.image} fluid />
                    </Col>
                    <Col sm={6} md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item as="h3">
                                {product.name}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    className="rating"
                                    text={` (${product.numReviews} reviews)`}
                                    color={"#f8e825"}
                                    value={product.rating}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span style={{ fontWeight: "bold" }}>
                                    Price: GHc{product.price}
                                </span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={6} sm={6} md={5}>
                                            Price:
                                        </Col>
                                        <Col xs={6} sm={6} md={7}>
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                GHc{product.price}
                                            </span>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={6} sm={6} md={5}>
                                            Status:
                                        </Col>
                                        <Col xs={6} sm={6} md={7}>
                                            {product.countInStock > 0
                                                ? `${product.countInStock} left`
                                                : "Out Of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={6} sm={6}>
                                                Quantity:
                                            </Col>
                                            <Col xs={6} sm={6}>
                                                <Form.Select
                                                    value={qty}
                                                    className="p-0"
                                                    onChange={e => {
                                                        setQty(
                                                            Number(
                                                                e.target.value
                                                            )
                                                        );
                                                    }}
                                                >
                                                    {[
                                                        ...Array(
                                                            product.countInStock
                                                        ).keys(),
                                                    ].map(i => (
                                                        <option key={i + 1}>
                                                            {i + 1}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <Button
                                    onClick={handleAddToCart}
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
            )}
        </div>
    );
}

export default ProductDetail;

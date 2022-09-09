import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Col, Row, Image, ListGroup, Button, Form } from "react-bootstrap";
import Message from "../components/Message";

import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
    const dispatch = useDispatch();

    console.log("render");

    const cartScreenInfo = useSelector(state => state.cartScreenInfo);
    const { cartItems } = cartScreenInfo;

    const removeFromCartHandler = id => {
        console.log("remove: ", id);
        dispatch(removeFromCart(id));
    };

    return (
        <Row style={{ fontWeight: "bold" }}>
            <h2>SHOPPING CART</h2>
            {cartItems.length > 0 ? (
                <Row>
                    <Col md={8}>
                        <ListGroup variant="flush">
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.id}>
                                    <Row className="mt-4">
                                        <Col xs={3} sm={3} md={2}>
                                            <Link to={`/product/${item.id}`}>
                                                <Image fluid src={item.image} />
                                            </Link>
                                        </Col>
                                        <Col xs={4} sm={4} md={3}>
                                            <Link to={`/product/${item.id}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col xs={5} sm={5} md={3}>
                                            GHc{" "}
                                            {(item.price * item.qty).toFixed(2)}
                                        </Col>
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={3}
                                            className="py-1"
                                        >
                                            <Form.Select
                                                size="sm"
                                                value={item.qty}
                                                onChange={e =>
                                                    dispatch(
                                                        addToCart(
                                                            item.id,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    )
                                                }
                                            >
                                                {[
                                                    ...Array(
                                                        item.countInStock
                                                    ).keys(),
                                                ].map(i => (
                                                    <option key={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                        <Col xs={2} sm={2} md={1}>
                                            <Button
                                                type="button"
                                                className="btn btn-light"
                                                onClick={() =>
                                                    removeFromCartHandler(
                                                        item.id
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col
                        md={4}
                        style={{
                            paddingLeft: "3em",
                            paddingTop: "2em",
                            paddingRight: "2em",
                        }}
                    >
                        <ListGroup>
                            <ListGroup.Item style={{ paddingLeft: "2em" }}>
                                <Row as="h3">Subtotal</Row>
                                <Row as="h4">
                                    (
                                    {cartItems.reduce(
                                        (acc, item) => acc + item.qty,
                                        0
                                    )}{" "}
                                    items)
                                </Row>
                                <Row>
                                    GHc{" "}
                                    {cartItems
                                        .reduce(
                                            (acc, item) =>
                                                acc + item.price * item.qty,
                                            0
                                        )
                                        .toFixed(2)}
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    // onClick={proceedToCheckout}
                                    className="btn-block"
                                    style={{ width: "-webkit-fill-available" }}
                                >
                                    PROCEED TO CHECKOUT
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            ) : (
                <Message variant="info" message="Your cart is empty." />
            )}
        </Row>
    );
}

export default CartScreen;

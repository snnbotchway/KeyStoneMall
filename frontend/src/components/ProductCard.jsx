import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div>
            <Card className="my-3 rounded p-3">
                <Link to={`/product/${product._id}`}>
                    <Card.Img className="photo" src={product.image} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <span style={{ fontWeight: "bold" }}>
                                {product.name}
                            </span>
                        </Card.Title>
                    </Link>
                    <Card.Text className="my-3" as="div">
                        <Rating
                            className="rating"
                            text={` (${product.numReviews} reviews)`}
                            color={"#f8e825"}
                            value={product.rating}
                        />
                    </Card.Text>
                    <Card.Text as="h3">GHc{product.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;

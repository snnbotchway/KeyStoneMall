import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return (
        <Spinner
            style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                display: "block",
            }}
            animation="grow"
            role="status"
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

export default Loader;

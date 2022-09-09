import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return (
        <Spinner
            style={{
                width: "120px",
                height: "120px",
                margin: "10vh auto",
                display: "block",
            }}
            animation="grow"
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

export default Loader;

import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ text }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <Spinner animation="border" variant="dark" />
      <span className="mt-3">{text}</span>
    </div>
  );
};

export default Loader;
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "../css/Item.css";

const Item = ({ prod }) => {
  return (
    <Card
      className="shadow-sm border rounded-4 h-100"
      style={{ width: "18rem" }}
    >
      <div className="bg-light text-center position-relative rounded-top-4">
        {prod.tag && (
          <Badge
            bg="danger"
            className="position-absolute top-0 start-0 m-2 px-2 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            {prod.tag}
          </Badge>
        )}

        <div className="image-container">
          <img src={prod.img} alt={prod.name} className="card-img-top" />
        </div>
      </div>

      <Card.Body className="d-flex flex-column padding-3">
        <Card.Title className="fs-5 mb-3">{prod.name}</Card.Title>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fs-5 fw-bold">${prod.price}.00</span>

          <Link
            className="btn btn-dark btn-sm px-3 rounded-pill"
            to={`/item/${prod.id}`}
          >
            Ver más
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;

import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const Error = () => {
  return (
    <div className="container text-center position-relative py-5">
      {/* Label */}
      <p
        className="text-uppercase fw-semibold mb-3"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          color: "#b0594a",
        }}
      >
        Page Not Found
      </p>

      {/* Heading */}
      <h1
        className="display-3 fw-bold mb-4"
        style={{ color: "#1a1a1a", letterSpacing: "-0.01em" }}
      >
        Oops! Esta pagina no existe.
      </h1>

      {/* Description */}
      <p
        className="lead mx-auto mb-4"
        style={{ maxWidth: "540px", color: "#3b3b3b" }}
      >
        Es posible que la página que buscas se haya movido, eliminado o quizás
        nunca haya existido. Puedes volver a la página de inicio para seguir
        navegando.
      </p>

      {/* Buttons */}
      <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
        <Link
          to="/"
          className="btn btn-dark btn-lg d-inline-flex align-items-center justify-content-center gap-2 px-4"
          style={{ minWidth: "180px" }}
        >
          <IoHomeOutline />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Error;

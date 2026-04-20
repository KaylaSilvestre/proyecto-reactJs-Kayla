import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="bg-white border-bottom py-2"
    >
      <Container className="px-3">
        {/* MOBILE: toggle + logo */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Brand as={NavLink} to="/" className="m-0 brand-logo">
            HECHO PA'MI
          </Navbar.Brand>
        </div>

        {/* DESKTOP: logo izquierda */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-none d-lg-block m-0 brand-logo"
        >
          HECHO PA'MI
        </Navbar.Brand>

        {/* MOBILE: carrito derecha */}
        <div className="d-flex align-items-center d-lg-none">
          <CartWidget />
        </div>

        {/* MENÚ */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4 fw-bold text-center text-lg-start">
            <Nav.Link as={NavLink} to="/" className="text-dark">
              Inicio
            </Nav.Link>

            <NavDropdown title="Productos" id="productos-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/vinilos">
                Vinilos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/souvenirs-y-regalos">
                Souvenirs y regalos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/decoracion">
                Decoración
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/impresion-3D">
                Impresión 3D
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contacto" className="text-dark">
              Contacto
            </Nav.Link>
          </Nav>

          {/* DESKTOP: carrito derecha */}
          <Nav className="d-none d-lg-flex">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

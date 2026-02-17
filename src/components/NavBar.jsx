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
      className="bg-white border-bottom"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            HECHO PA'MI
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center "
        >
          <Nav className="d-flex gap-4 fw-bold">
            <Nav.Link as={NavLink} to="/" className="text-dark">
              Inicio
            </Nav.Link>

            <NavDropdown title="Productos" id="productos-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/stickers">
                Stickers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/souvenirs y regalos">
                Souvenirs y regalos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/decoracion">
                Decoración
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/impresion 3D">
                Impresión 3D
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/todos los productos">Todos los productos</NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contacto" className="text-dark">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

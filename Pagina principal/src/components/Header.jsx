import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll"; // Importamos el Link de react-scroll
import "../assets/css/Header.css";

const MyNavbar = () => {
  const [showButton, setShowButton] = useState(false);

  // Mostrar el botón al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Navbar fixed="top" className="navp" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">
            <div className="log"></div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100} // Ajusta el desplazamiento
                activeClass="active"
                className="nav-op nav-link" // "nav-link" es requerido para que funcione con Bootstrap
              >
                INICIO
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="nav-op nav-link"
              >
                NOSOTROS
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="nav-op nav-link"
              >
                SERVICIO
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="nav-op nav-link"
              >
                CONTACTO
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <>
        {showButton && (
          <Button
            onClick={scrollToTop}
            className="back-to-top"
            style={{
              position: "fixed",
              bottom: "10px",
              right: "10px",
              zIndex: "1000",
            }}
          >
            <FontAwesomeIcon icon={faCaretUp} />
          </Button>
        )}
      </>
    </Navbar>
  );
};

export default MyNavbar;

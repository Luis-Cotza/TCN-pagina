import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../assets/css/Footer.css"; // Archivo CSS para personalización

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=61560243892325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/tcn.gt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FaLinkedin size={30} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2024 Total Coverage Network. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

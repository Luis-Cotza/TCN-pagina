import "../assets/css/Contact.css";
import "../assets/css/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="container flex-grow-1">
        <div className="section-header">
          <center>
            <h2 style={{ paddingBottom: "15px" }}>Contáctanos</h2>
          </center>
          <p className="text-cont">
            Estamos aquí para ayudarte. Si tienes alguna pregunta, comentario o
            necesitas asistencia con nuestros servicios, no dudes en ponerte en
            contacto con nosotros. Nuestro equipo de soporte está disponible
            para ofrecerte la mejor asistencia posible.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div>
              <iframe
                title="Google Maps"
                style={{ height: "500px", width: "100%", border: "0" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5012.723213132283!2d-90.57164482394062!3d14.578808077607968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a0da30597f13%3A0x22ade13e8946dcd4!2sCentro%20Empresarial%2C%20Calz.%20Aguilar%20Batres%2045-54%2C%20Cdad.%20de%20Guatemala!5e1!3m2!1ses-419!2sgt!4v1721888481128!5m2!1ses-419!2sgt"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row contact-info">
              <div className="col-md-6">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>Números de teléfono</h3>
                  <p>
                    <a href="tel:+502 24791828">+502 24791828</a>
                  </p>
                  <p>
                    <a href="tel:+502 37643511">+502 59519335</a>
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Correos</h3>
                  <p>
                    <a href="mailto:info@tcngt.com">info@tcngt.com</a>
                  </p>
                  <p>
                    <a href="mailto:info@tcngt.com">ventas@tcngt.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="contactForm">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Tu nombre"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Correo"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Asunto"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Mensaje"
                  ></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center py-2">
                  <button type="submit">Enviar Mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-4 mt-auto">
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
    </div>
  );
};

export default Contact;

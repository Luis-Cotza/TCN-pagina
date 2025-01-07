import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCarousel from "./components/Carousel";
import About from "./components/About";
import MovingBanner from "./components/Brands";
import Contact from "./components/Contact";
import RoundImageCard from "./components/Services";
import "./assets/css/App.css";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({});

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F4F4" }}>
      <Header />

      <Element name="home">
        <section id="home" style={{ minHeight: "100vh" }}>
          <MyCarousel />
        </section>
      </Element>
      <Element name="about">
        <section id="about">
          <About />
        </section>
      </Element>
      <Element name="services">
        <div className="container mt-5">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <strong>Servicios</strong>
          </h1>
          <div className="row justify-content-center align-items-center">
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <RoundImageCard
                imageUrl="img/services/redes.jpg"
                title="Infraestructura en redes, voz y datos"
                // text="This is some example text for the first card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <RoundImageCard
                imageUrl="img/services/FIREWALL-768x768.jpg"
                title="Seguridad y Control"
                // text="This is some example text for the second card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <RoundImageCard
                imageUrl="img/services/domo.jpg"
                title="Domótica y Automatizacion de edificios"
                // text="This is some example text for the third card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <RoundImageCard
                imageUrl="img/services/infra.jpg"
                title="Infraestructura Física y Operacional"
                text="This is some example text for the first card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <RoundImageCard
                imageUrl="img/services/prod.jpg"
                title="Productos Corporativos"
                // text="This is some example text for the second card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <RoundImageCard
                imageUrl="img/services/control-de-incendios-768x768.jpg"
                title="Control de incendios"
                // text="This is some example text for the third card."
              />
            </div>
            {/* <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <RoundImageCard
                imageUrl="https://via.placeholder.com/150"
                title="Card Title 1"
                text="This is some example text for the first card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <RoundImageCard
                imageUrl="https://via.placeholder.com/150"
                title="Card Title 2"
                text="This is some example text for the second card."
              />
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <RoundImageCard
                imageUrl="https://via.placeholder.com/150"
                title="Card Title 3"
                text="This is some example text for the third card."
              />
            </div> */}
            {/* Repite el patrón para las demás tarjetas */}
          </div>
        </div>
      </Element>

      <MovingBanner />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;

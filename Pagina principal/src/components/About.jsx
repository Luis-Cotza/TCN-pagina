// import React from "react";
import "../assets/css/About.css"; // Si deseas agregar estilos personalizados

const AboutUs = () => {
  return (
    <div className="container py-5" style={{ overflowX: "hidden" }}>
      <div className="row align-items-center">
        {/* Columna de la izquierda: Texto del título */}
        <div className="col-md-12 mb-4 mb-md-0">
          <h1
            className="display-2"
            data-aos="fade-down"
            data-aos-duration="1000"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            <strong>¿Quienes somos?</strong>
          </h1>
          <br />
          <p className="abo" data-aos="fade-right" data-aos-duration="1000">
            Somos{" "}
            <span>
              <strong>líderes</strong>
            </span>{" "}
            en la provisión de soluciones integrales de tecnología e
            infraestructura. Con una trayectoria sólida y un equipo de expertos
            altamente calificados, nos dedicamos a garantizar que su empresa
            esté siempre conectada y segura
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-between  py-5 ">
        <div className="col-12 col-md-3 cards">
          <div
            className="card-children"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <center>
              <h3 className="card-children-title">VISIÓN</h3>
            </center>
            <img
              src="img/about/3.png"
              alt=""
              className="vision-img"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <p className="card-children-text" style={{ textAlign: "right" }}>
              Ser reconocidos como la empresa líder en soporte tecnológico e
              infraestructura de redes a nivel global, distinguiéndonos por
              nuestra innovación, fiabilidad y compromiso con la excelencia.
              Aspiramos a ser el socio estratégico que contribuya al éxito y la
              transformación digital de nuestros clientes en Guatemala y Centro
              América
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 cards">
          <div
            className="card-children"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <center>
              <h3 className="card-children-title">MISIÓN</h3>
            </center>
            <p className="card-children-text" style={{ textAlign: "justify" }}>
              Proporcionar soluciones integrales y de vanguardia en tecnología e
              infraestructura que impulsen el crecimiento y la eficiencia de
              nuestros clientes. Nuestro compromiso es ofrecer servicios de alta
              calidad, asegurando la conectividad, seguridad y optimización de
              los recursos tecnológicos de las empresas.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 cards">
          <div
            className="card-children"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <center>
              <h3 className="card-children-title">VALORES</h3>
            </center>
            <br />
            <ul className="py-2 card-children-text">
              <li>Innovación</li>
              <li>Integridad</li>
              <li>Calidad</li>
              <li>Compromiso</li>
              <li>Colaboración</li>
            </ul>
            <img
              src="img/about/2.png"
              alt=""
              className="valores"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

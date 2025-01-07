import { Carousel } from "react-bootstrap";

const ResponsiveCarousel = () => {
  return (
    <Carousel style={{ marginTop: "100px" }}>
      <Carousel.Item>
        <picture>
          {/* Imagen para dispositivos pequeños */}
          <source media="(max-width: 576px)" srcSet="img/carousel/1.jpg" />
          {/* Imagen para dispositivos medianos */}
          <source
            media="(min-width: 577px) and (max-width: 768px)"
            srcSet="img/carousel/1_1.jpg"
          />
          {/* Imagen para dispositivos grandes */}
          <img
            src="img/carousel/1_2.jpg"
            alt="First slide"
            className="d-block w-100"
          />
        </picture>
        {/* <Carousel.Caption>
          <h3>Primera imagen</h3>
          <p>Descripción de la primera imagen.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <picture>
          <source media="(max-width: 576px)" srcSet="img/carousel/2.jpg" />
          <source
            media="(min-width: 577px) and (max-width: 768px)"
            srcSet="img/carousel/2_2.jpg"
          />
          <img
            src="img/carousel/2_3.jpg"
            alt="Second slide"
            className="d-block w-100"
          />
        </picture>
        {/* <Carousel.Caption>
          <h3>Segunda imagen</h3>
          <p>Descripción de la segunda imagen.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <picture>
          <source media="(max-width: 576px)" srcSet="img/carousel/3.jpg" />
          <source
            media="(min-width: 577px) and (max-width: 768px)"
            srcSet="img/carousel/3_2.jpg"
          />
          <img
            src="img/carousel/3_3.jpg"
            alt="Third slide"
            className="d-block w-100"
          />
        </picture>
        {/* <Carousel.Caption>
          <h3>Tercera imagen</h3>
          <p>Descripción de la tercera imagen.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default ResponsiveCarousel;

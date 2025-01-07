import "../assets/css/CardComponent.css"; // Importa los estilos

const CardComponent = ({ title, description, image, icon }) => {
  return (
    <div className="card-container">
      <div className="icon-container">
        <img src={icon} alt={title} className="icon" />
      </div>
      <img src={image} alt={title} className="image" />
      <h3 className="card-title">{title}</h3>
      {/* <p className="card-description">{description}</p> */}
    </div>
  );
};

export default CardComponent;

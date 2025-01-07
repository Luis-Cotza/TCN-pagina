import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Services.css";
const RoundImageCard = ({ imageUrl, title, text }) => {
  return (
    <Card style={{ width: "18rem", cursor: "pointer" }} className="text-center">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt="Card image"
        className="rounded-circle mx-auto mt-3"
        style={{ width: "200px", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RoundImageCard;

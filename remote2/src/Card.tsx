import { FC } from "react";
import Button from "react-bootstrap/Button";
import BCard from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './background.png';

const Card: FC<{ text: string }> = ({ text }) => {
  return (
    <BCard style={{ width: "18rem" }}>
      <BCard.Img variant="top" src={img} />
      <BCard.Body>
        <BCard.Title>Card Title</BCard.Title>
        <BCard.Text>{text}</BCard.Text>
        <Button variant="primary">Go somewhere</Button>
      </BCard.Body>
    </BCard>
  );
};

export default Card;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge, Card } from "react-bootstrap";

function SyCard(cardProps) {
  const { index, card, editCard, deleteCard } = cardProps;
  return (
    <div>
      <Card key={index} style={{ width: '50rem'}}>
        <Card.Body>
          <Badge style={{ color: "black", position: "absolute", top: "0", left: "0" }}> {index + 1} </Badge>
          <Card.Title>{card.title}</Card.Title>
          <Card.Subtitle>{card.description}</Card.Subtitle>
          <Card.Subtitle>{card.objectives}</Card.Subtitle>
          <Button onClick={editCard}>Edit</Button>
          <Button onClick={deleteCard}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SyCard;

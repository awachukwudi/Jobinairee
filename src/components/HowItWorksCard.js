import React from "react";
import { Card } from "react-bootstrap";
import Registeraccount from "../components/Images/registeraccount.png";

export default function HowItWorksCard() {
  return (
    <div>
      <Card style={{ width: "14rem", height: "20rem" }}>
        <Card.Body className="Howitworkscardstyle">
          <Card.Title className="mt-2">
            <img src={Registeraccount} alt="" width="40" />
          </Card.Title>
          <Card.Subtitle className="mt-5 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text className="mt-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

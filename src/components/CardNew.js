import React from "react";
import { Card } from "react-bootstrap";
import Quoteblack from "../components/Images/QuoteBlack.png";
import Manimage1 from "../components/Images/manimage1.png";

export default function CardNew() {
  return (
    <div className="bootstrapcard">
      <Card className="bootstrap-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <img src={Quoteblack} alt="..." width="40" />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h3>An Amazing site with preference to job search</h3>
          </Card.Subtitle>
          <Card.Text>
            <div className="client-image-and-text-div">
              <img src={Manimage1} alt="" width="50" />
              <div className="Client-name-Text">
                <h2>Olu Micheal</h2>
                <h4>Product Designer</h4>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

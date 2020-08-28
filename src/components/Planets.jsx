import React from 'react';
import { Card, ListGroup, Button, Row } from 'react-bootstrap';

function Planets({ title, text, clickHandler, page }) {
  return (
    <Row className="justify-content-center container">
      <Card className="bg-dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-white">{title}</Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">{text}</ListGroup>
          </Card.Text>
          <Button
            disabled={page === 1}
            onClick={() => {
              clickHandler(--page);
            }}>
            PREV
          </Button>
          <Button
            disabled={page === 6}
            onClick={() => {
              clickHandler(++page);
            }}>
            NEXT
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Planets;

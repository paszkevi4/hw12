import React from 'react';
import { Table, thead, tbody } from 'react-bootstrap';

function Movies(props) {
  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>BIRTH DATE</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>{props.text}</tbody>
      </Table>
    </div>
  );
}

export default Movies;

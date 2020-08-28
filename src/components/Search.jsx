import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';

function Search({ charactersClickHandler, planetsClickHandler, currentMovie, setCurrentMovie }) {
  //const [currentMovie, setCurrentMovie] = useState(1);
  const moviesArr = [
    '',
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'The Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith',
  ];

  return (
    <Row>
      <Col sm={4}>
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title={moviesArr[currentMovie]}
            variant="success"
            id="bg-nested-dropdown">
            <Dropdown.Item
              onClick={() => {
                setCurrentMovie(1);
              }}>
              A New Hope
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentMovie(2);
              }}>
              The Empire Strikes Back
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentMovie(3);
              }}>
              Return of the Jedi
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentMovie(4);
              }}>
              The Phantom Menace
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentMovie(5);
              }}>
              Attack of the Clones
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentMovie(6);
              }}>
              Revenge of the Sith
            </Dropdown.Item>
          </DropdownButton>
          <Button
            variant="success"
            onClick={() => {
              charactersClickHandler(currentMovie);
            }}>
            Search
          </Button>
        </ButtonGroup>
      </Col>
      <Col sm={4}>
        <Button
          variant="success"
          onClick={() => {
            planetsClickHandler(1);
          }}>
          GET PLANETS
        </Button>
      </Col>
      <Col sm={4}>
        <div sm={2}>
          <InputGroup sm={2}>
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" value="wookiee" disabled />
          </InputGroup>
        </div>
      </Col>
    </Row>
  );
}

export default Search;

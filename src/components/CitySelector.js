import React, { useState } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
// import { API_BASE_URL, API_KEY } from "../apis/config";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");
  // const [results, setResults] = useState(null);

  // const onSearch = () => {
  //   fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
  //     .then((response) => response.json())
  //     .then((results) => setResults(results));
  // };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl placeholder="Enter City" onChange={(e) => setCity(e.target.value)} value={city} onKeyDown={onKeyDown} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;

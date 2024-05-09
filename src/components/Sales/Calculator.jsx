import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <Container pad>
      <Row>
        <Col>
          <input type="text" value={display} readOnly />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => handleClick('7')}>7</Button>
          <Button onClick={() => handleClick('8')}>8</Button>
          <Button onClick={() => handleClick('9')}>9</Button>
          <Button onClick={() => handleClick('/')}>/</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => handleClick('4')}>4</Button>
          <Button onClick={() => handleClick('5')}>5</Button>
          <Button onClick={() => handleClick('6')}>6</Button>
          <Button onClick={() => handleClick('*')}>*</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => handleClick('1')}>1</Button>
          <Button onClick={() => handleClick('2')}>2</Button>
          <Button onClick={() => handleClick('3')}>3</Button>
          <Button onClick={() => handleClick('-')}>-</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => handleClick('0')}>0</Button>
          <Button onClick={() => handleClick('.')}>.</Button>
          <Button onClick={handleCalculate}>=</Button>
          <Button onClick={() => handleClick('+')}>+</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleClear}>C</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
import React from 'react'
// import Calculator from '../components/Sales/Calculator'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaRegistros from "../components/Sales/TablaRegistros"

export const VentasPagina = () => {
  return (
    <Container>
      <Row>
        {/* <Col>
        <Calculator/>
        </Col> */}
        <Col>
        <TablaRegistros/>
        </Col>
      </Row>
    </Container>
  )
}

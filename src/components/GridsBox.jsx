import React from 'react'
import { Container, Row, Col } from 'react-grid-system';


const GridsBox = () => {
  return (
    <Container>
  <Row>
    <Col sm={4}  className="h-[300px] border-2">
      One of three columns
    </Col>
    <Container>
      <Row>
        <Col sm={6} className="border-2 h-[200px] w-[150px]">
          One of three columns
        </Col>
        <Col sm={6} className="border-2 h-[200px] w-[150px]">
          One of three columns
        </Col>

      </Row>
      <Row>
        <Col sm={6} className="border-2 h-[200px] w-[150px]">
          One of three columns
        </Col>
        <Col sm={6} className="border-2 h-[200px] w-[150px]">
          One of three columns
        </Col>

      </Row>
    </Container>
  </Row>

</Container>

  )
}

export default GridsBox

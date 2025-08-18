import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Advertisement() {
  return (
    <>
      <section className='Branding padding-Y-X'>
        <Container fluid>
            <Row className='justify-content-center'>
                <Col lg={10}>
                <div className="brandingImages">
                    <img src="/images/brandcar.png" alt="" className='w-100 object-fit-cover rounded-4' height={262}/>
                </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Advertisement;

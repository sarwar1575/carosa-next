import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';

function FormHeadingComponents({title}) {
  return (
    <>
      <Col xs={12} className="mb-4">
            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={4}>
                <div className="carBasicDetails position-relative">
                    <div className='check d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faCheck} className='fSize-2'/></div>
                    <div className='quadrat'></div>
                  <h6 className="bg-white py-3 text-center fw-semibold fSize-6">
                    {title}
                  </h6>
                </div>
              </Col>
            </Row>
          </Col>
    </>
  )
}

export default FormHeadingComponents;

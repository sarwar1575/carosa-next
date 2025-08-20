"use client";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Row } from "react-bootstrap";

function AccordionList() {
  return (
    <>
      <div className="facilityCarosa mt-4">
        <Accordion>
          <Row>
            <Col xs={12} className='mb-4'>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h5 className='m-0 fSize-4 fw-semibold'>Why Choose <span className='acc-car fw-normal'>CAR</span><span className='acc-osa fw-normal'>OSA</span></h5></Accordion.Header>
                <Accordion.Body>
                  <p className='fSize-2 fw-normal text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p> 
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col xs={12}>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h5 className='m-0 fSize-4 fw-semibold'><span className='acc-car fw-normal'>CAR</span><span className='acc-osa fw-normal'>OSA</span> Ka Bharosa</h5></Accordion.Header>
                <Accordion.Body>
                    <p className='fSize-2 fw-normal text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p> 
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          </Row>
        </Accordion>
      </div>
    </>
  );
}

export default AccordionList;

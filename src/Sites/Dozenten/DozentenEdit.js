import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BackButton from '../../Components/BackButton';
import DozentEditForm from '../../Components/Dozenten/DozentenEditForm';


const DozentenEdit = () => {
  return (
        <Container>
            <Row>
                <BackButton route="/dozenten/" />
                <Col lg={7} className="mt-5"><DozentEditForm /></Col>
            </Row>
        </Container>
   );
};
  
export default DozentenEdit;



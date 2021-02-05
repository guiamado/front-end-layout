import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import BreadCrumb from 'components/bread-crumb/BreadCrumb';

const Home: React.FC = () => {
    return (<Container>
        <Row>
            <Col lg="12">
                <NavBar />
            </Col>
            <Col lg="12">
                <BreadCrumb pageName="Card Actions" route="eCommerce/Electronics"/>
            </Col>
        </Row>
    </Container>);
}

export default Home;
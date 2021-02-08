import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import BreadCrumb from 'components/bread-crumb/BreadCrumb';
import ProductsList from 'components/products-list/ProductsList';
import Filters from 'components/filters/Filters';

const Home: React.FC = () => {
    return (<div style={{ paddingRight: 35, paddingLeft: 315}}>
        <Row>
            <Col lg="12">
                <NavBar />
            </Col>
            <Col lg="12">
                <BreadCrumb pageName="Card Actions" route="eCommerce/Electronics"/>
            </Col>
            <Col lg="3">
                < Filters/>
            </Col>
            <Col lg="9">
             <ProductsList />
            </Col>
        </Row>
    </div>);
}

export default Home;
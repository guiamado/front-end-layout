import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import BreadCrumb from 'components/bread-crumb/BreadCrumb';
import ProductsList from 'components/products-list/ProductsList';

type MultiRange = {
    value: string;
    label: string;
}

const Home: React.FC = () => {
    const multiRangeOptions: MultiRange[] = [
        {
            value: '10',
            label: '$10'
        },
        {
            value: '10-100',
            label: '$10 - $100'
        },
        {
            value: '100-550',
            label: '$100 - $550'
        },
        {
            value: 'all',
            label: 'All'
        },
    ]
    return (<div id="Filters">
        <div>
            Filters
        </div>
        <Card>
            <Card.Body>
                {multiRangeOptions.map((el, index) => {
                    return (<div key={`multiRange_${index}`}>
                        <input type="radio" value={el.value}  name="multiRange" />
                        <label>{el.label}</label>
                    </div>)
                })}
            </Card.Body>
        </Card>
        {/* <Row>
            <Col lg="12">
                <NavBar />
            </Col>
            <Col lg="12">
                <BreadCrumb pageName="Card Actions" route="eCommerce/Electronics"/>
            </Col>
            <Col lg="12">
             <ProductsList />
            </Col>
        </Row> */}
    </div>);
}

export default Home;
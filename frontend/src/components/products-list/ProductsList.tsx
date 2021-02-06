import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Grid from 'assets/images/icons/Grid';

type SelectOptions = {
    value: string;
    name: string;
}

const ProductsList: React.FC = () => {
    const selectOptions: SelectOptions[] = [
        {
            value: 'mostRelevant',
            name: 'Most Relevant'
        },
        {
            value: 'lowPrice',
            name: 'Low Price'
        },
    ];

    return (<Row id="ProductsList">
        <Col lg="12">
            <Row style={{ alignItems: 'center', marginBottom: 22}}>
                <Col lg="6">
                    <span style={{ fontSize: 18 }}>
                        7,618 results found in 5ms
                    </span>
                </Col>
                <Col lg="6" className="productActions">
                    <select name="selectProducts" id="selectProducts">
                        <option value="" selected>Default</option>
                        {selectOptions.map(el => {
                            return (
                                <option value={el.value}>{el.name}</option>
                            )
                        })}
                    </select>
                    <Button className="btnProduct gridBtn">
                        <Grid />
                    </Button>
                    <Button className="btnProduct">
                        <span className="icon" id="productListIcon">
                            <FontAwesomeIcon icon={faBars} color="#000000"/>
                        </span>
                    </Button>
                </Col>
            </Row>
        </Col>
        <Col lg="12">
            <div className="search">
                <input type="text" placeholder="Search hear" />
                <span className="prependIcon">
                    <FontAwesomeIcon icon={faSearch} color="#606060"/>
                </span>
            </div> 
        </Col>
    </Row>);
}

export default ProductsList;
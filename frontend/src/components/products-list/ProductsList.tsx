import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Grid from 'assets/images/icons/Grid';
import Product, { ProductType } from './Product';

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

    const productsList: ProductType[] = [
        {
            title: 'Apple Watch Series 4 GPS',
            brand: 'Apple',
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make
            a type specimen book.`,
            rating: 3.4,
            price: 399,
            onWishList: true,
        },
        {
            title: 'JBL Speaker',
            brand: 'JBL',
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make
            a type specimen book.`,
            price: 199,
            onWishList: false,

        },
        {
            title: 'Apple iPhone X 128GB',
            brand: 'Apple',
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make
            a type specimen book.`,
            price: 899,
            onWishList: false,

        },
        {
            title: 'Beats Headphones',
            brand: 'Beats',
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make
            a type specimen book.`,
            price: 459,
            onWishList: false,

        },
    ];

    return (<Row id="ProductsList">
        <Col lg="12">
            <Row style={{ alignItems: 'center', marginBottom: 22}}>
                <Col lg="6" xs="12" className="results">
                    <span style={{ fontSize: 18 }}>
                        7,618 results found in 5ms
                    </span>
                </Col>
                <Col lg="6" xs="12" className="productActions">
                    <select name="selectProducts" id="selectProducts" defaultValue="default">
                        <option value="default">Default</option>
                        {selectOptions.map(el => {
                            return (
                                <option value={el.value} key={`option_${el.name}`}>{el.name}</option>
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
        <Col lg="12">
            {productsList.map((productItem, indexProduct) => {
                return <Product product={productItem} key={`productItem_${indexProduct}`}/>
            })}
        </Col>
    </Row>);
}

export default ProductsList;
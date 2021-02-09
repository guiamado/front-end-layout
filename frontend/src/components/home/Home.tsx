import React, { CSSProperties } from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import BreadCrumb from 'components/bread-crumb/BreadCrumb';
import ProductsList from 'components/products-list/ProductsList';
import Filters from 'components/filters/Filters';
import Utils from 'components/commons/Utils';

type Props = {
    onClickIconSidebar: (data?: any) => void;
}

const Home: React.FC<Props> = (props) => {
    const { onClickIconSidebar } = props;
    const styleHome: CSSProperties = {
        paddingRight: 35,
        paddingLeft: Utils.isSmallDevice ? 35 : 315,
    }
    return (<div style={styleHome}>
        <Row>
            <Col lg="12">
                <NavBar onClickIconSidebar={onClickIconSidebar}/>
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
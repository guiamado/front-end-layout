import React, { CSSProperties, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import BreadCrumb from 'components/bread-crumb/BreadCrumb';
import ProductsList from 'components/products-list/ProductsList';
import Filters from 'components/filters/Filters';
import Utils from 'components/commons/Utils';
import FloatingActionButton from 'components/commons/FloatingActionButton';
import FiltersModal from 'components/filters/FiltersModal';

type Props = {
    onClickIconSidebar: (data?: any) => void;
}

const Home: React.FC<Props> = (props) => {
    const { onClickIconSidebar } = props;
    const [showModal, setshowModal] = useState<boolean>(false);
    const styleHome: CSSProperties = {
        paddingRight: 35,
        paddingLeft: Utils.isSmallDevice ? 35 : 315,
    };

    function onClickFab() {
        setshowModal(true);
    }

    function onCloseModal() {
        setshowModal(false);
    }

    return (<div style={styleHome}>
        <Row>
            <Col lg="12">
                <NavBar onClickIconSidebar={onClickIconSidebar}/>
            </Col>
            <Col lg="12">
                <BreadCrumb pageName="Card Actions" route="eCommerce/Electronics"/>
            </Col>
            {!Utils.isSmallDevice && (
                <Col lg="3">
                    < Filters/>
                </Col>
            )}
            <Col lg={Utils.isSmallDevice ? '12' : '9'}>
                <ProductsList />
            </Col>
        </Row>
        {Utils.isSmallDevice && (
            <>
                <FiltersModal isModalOpenProp={showModal} onCloseModal={onCloseModal}/>
                <FloatingActionButton onClickFab={onClickFab}/>
            </>
        )}
    </div>);
}

export default Home;
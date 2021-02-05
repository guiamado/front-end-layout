import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Settings from 'assets/images/icons/Settings';

type Props = {
    pageName: string;
    route: string;
}

const BreadCrumb: React.FC<Props> = (props) => {
    const { pageName, route } = props;
    const routeArray = route.split('/');
    return (<Row id="BreadCrumb">
        <Col lg="6">
            <div>
                <h1 className="pageName">
                    {pageName} |
                </h1>
                <span className="icon" id="homeIconBreadCrumb">
                    <FontAwesomeIcon icon={faHome} color="#000000"/>
                </span>
                {routeArray.map((el, index) => {
                    return (<span>
                        {/* {`>> ${el}`} */}
                        <span style={{ marginLeft: 11, marginRight: 11, width: 11, height: 8 }}>{'>>'}</span>
                        <span
                            style={{ fontSize: 14, color: routeArray.length - 1 === index ? '#2C2C2C' : '#000000' }}
                            className={routeArray.length - 1 !== index ? 'pageBreadCrumb' : ''}
                        >
                            {el}
                        </span>
                    </span>)
                })}
                
            </div>
        </Col>
        <Col lg="6">
            <div style={{ textAlign: 'right' }}>
                <Settings fill="#253858" />
            </div>
        </Col>
    </Row>);
}

export default BreadCrumb;

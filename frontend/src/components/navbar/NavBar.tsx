import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar, faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import Utils from 'components/commons/Utils';
import LogoGranCursos from 'assets/images/LogoGranCursos.svg';

type Props = {
    onClickIconSidebar: (data?: any) => void;
}

const NavBar: React.FC<Props> = (props) => {
    const { onClickIconSidebar } = props;
    const icons = [faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar];

    return (<Row style={{ alignItems: 'center' }}>
        {Utils.isSmallDevice && (
            <>
                <Col lg="1" xs="2" sm="1">
                    <Button className="btnSidebarNav" onClick={() => onClickIconSidebar()}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faBars} color="#000000"/>
                        </span>
                    </Button>
                </Col>
                {Utils.isMobile && (
                    <Col sm="11" xs="10" style={{ textAlign: 'center' }}>
                        <img src={LogoGranCursos} alt="" height="60" width="220" style={{ marginTop: 30 }}/>
                    </Col>
                )}
            </>
        )}
        <Col lg={Utils.isSmallDevice ? '11' : '12'}>
            <Card className="navBar">
                <Card.Body style={{ paddingTop: 15, paddingBottom: 15 }}>
                    <Row>
                        <Col lg="4" xs={{ order: Utils.isMobile ? 'last' : 'first', span: 12 }}>
                            {icons.map((el, index) => {
                                return (
                                    <span className="icon" key={`icon-${index}`}>
                                        <FontAwesomeIcon icon={el} color="#606060"/>
                                    </span>
                                );
                            })}
                        </Col>
                        {Utils.isMobile && (
                            <Col xs="12">
                                <hr />
                            </Col>
                        )}
                        <Col lg={{ span: 4, offset: 4 }} xs={{ order: Utils.isMobile ? 'first' : 'last', span: 12 }}>
                            <div className="profile">
                                <span style={{ marginRight: 22 }}>
                                    English
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faBell} color="#606060"/>
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faSearch} color="#606060" />
                                </span>
                                <span style={{ marginRight: 22 }}>
                                    John Doe <br/>
                                    <span style={{ fontSize: 11}}>Available</span>
                                </span>
                                <span style={{ cursor: 'pointer', fontSize: 22 }}>
                                    <FontAwesomeIcon icon={faUserCircle} color="#606060"/>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>);
}

export default NavBar;
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar, faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
    const icons = [faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar];

    return (<Row>
        <Col lg="12">
            <Card style={{ height: 62 }} className="navBar">
                <Card.Body style={{ paddingTop: 15, paddingBottom: 15 }}>
                    <Row>
                        <Col lg="4">
                            {icons.map((el, index) => {
                                return (
                                    <span style={{ marginLeft: 22, cursor: 'pointer', fontSize: 18 }} key={`icon-${index}`}>
                                        <FontAwesomeIcon icon={el} color="#606060"/>
                                    </span>
                                );
                            })}
                        </Col>
                        <Col lg={{ span: 4, offset: 4 }}>
                            <div style={{ display: 'flex', fontSize: 14, justifyContent: 'flex-end', color: '#2C2C2C' }}>
                                <span style={{ marginRight: 22 }}>
                                    English
                                </span>
                                <span style={{ marginRight: 22, cursor: 'pointer', fontSize: 18 }}>
                                    <FontAwesomeIcon icon={faBell} color="#606060"/>
                                </span>
                                <span style={{ marginRight: 22, cursor: 'pointer', fontSize: 18 }}>
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
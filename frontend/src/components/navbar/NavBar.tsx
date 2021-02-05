import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar, faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
    const icons = [faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar];

    return (<Row>
        <Col lg="12">
            <Card style={{ height: 62 }}>
                <Card.Body>
                    <Row>
                        <Col lg="4">
                            {icons.map((el, index) => {
                                return (
                                    <span style={{ marginLeft: 22, cursor: 'pointer', fontSize: 22 }} key={`icon-${index}`}>
                                        <FontAwesomeIcon icon={el} color="black"/>
                                    </span>
                                );
                            })}
                        </Col>
                        <Col lg={{ span: 4, offset: 4 }}>
                            <div style={{ display: 'flex', fontSize: 14, alignItems: 'center', justifyContent: 'flex-end' }}>
                                <span style={{ marginRight: 22 }}>
                                    English
                                </span>
                                <span style={{ marginRight: 22, cursor: 'pointer', fontSize: 22 }}>
                                    <FontAwesomeIcon icon={faBell} color="black"/>
                                </span>
                                <span style={{ marginRight: 22, cursor: 'pointer', fontSize: 22 }}>
                                    <FontAwesomeIcon icon={faSearch} color="black" />
                                </span>
                                <span style={{ marginRight: 22 }}>
                                    John Doe <br/>
                                    Available
                                </span>
                                <span style={{ cursor: 'pointer', fontSize: 22 }}>
                                    <FontAwesomeIcon icon={faUserCircle} color="black"/>
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
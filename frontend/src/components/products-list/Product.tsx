import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from 'assets/images/icons/ShoppingCart';
import ShoppingBag from 'assets/images/icons/ShoppingBag';
import ImageNotFound from 'assets/images/image-not-found.png';

const Home: React.FC = () => {
    const [isWishlist, setIsWishlist] = useState<boolean>(false);

    return (<Card className="product">
        <Card.Body>
            <Row>
                <Col lg="3" xs="12" className="product-image">
                    <img src={ImageNotFound} alt=""/>
                </Col>
                <Col className="product-text" lg="5" xs="12">
                    <div className="product-title">
                        Apple Watch Series 4 GPS
                    </div>
                    <div className="product-category">
                        By Apple
                    </div>
                    <div className="product-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </div>
                </Col>
                <Col lg="1">
                    <div className="verticalDivider"></div>
                </Col>
                <Col lg="3" xs="12">
                    <div className="product-rating">
                        <Card>
                            <Card.Body>
                                3.4 <FontAwesomeIcon icon={faStar} color="#FFFFFF"/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="product-price">
                        $399
                    </div>
                    <div className="product-shipping">
                        <ShoppingCart />{' '}Free Shipping
                    </div>
                    <div className="btnWishlist">
                        <Button onClick={() => setIsWishlist(!isWishlist)}>
                            {isWishlist ? (
                                <FontAwesomeIcon icon={faHeartSolid} color="#FF000A" style={{ marginRight: 8 }} />
                            ): (
                                <FontAwesomeIcon icon={faHeart} color="#000000" style={{ marginRight: 8 }} />
                            )}
                            {' '}
                            WISHLIST
                        </Button>
                    </div>
                    <div className="btnCart">
                        <Button>
                            <ShoppingBag style={{ marginRight: 8 }} />
                            {' '}
                            ADD TO CART
                        </Button>
                    </div>
                </Col>
            </Row>
        </Card.Body>
    </Card>);
}

export default Home;
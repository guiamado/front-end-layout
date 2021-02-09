import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from 'assets/images/icons/ShoppingCart';
import ShoppingBag from 'assets/images/icons/ShoppingBag';
import ImageNotFound from 'assets/images/image-not-found.png';

export type ProductType = {
    title: string;
    brand: string;
    description: string;
    rating?: number;
    price: number;
    onWishList: boolean;
};

type Props = {
    product: ProductType;
}

const Home: React.FC<Props> = (props) => {
    const { product } = props;
    const [isWishlist, setIsWishlist] = useState<boolean>(false);

    useEffect(() => {
        setIsWishlist(product.onWishList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<Card className="product">
        <Card.Body>
            <Row>
                <Col lg="3" xs="12" className="product-image">
                    <img src={ImageNotFound} alt=""/>
                </Col>
                <Col className="product-text" lg="5" xs="12">
                    <div className="product-title">
                        {product.title}
                    </div>
                    <div className="product-category">
                        By {product.brand}
                    </div>
                    <div className="product-desc">
                        {product.description}
                    </div>
                </Col>
                <Col lg="1">
                    <div className="verticalDivider"></div>
                </Col>
                <Col lg="3" xs="12">
                    <div className="product-rating">
                        <Card>
                            <Card.Body>
                                {product.rating ? (
                                    <>
                                        {product.rating} <FontAwesomeIcon icon={faStar} color="#FFFFFF"/>
                                    </>
                                ) : (
                                    <>
                                        NEW <FontAwesomeIcon icon={faStar} color="#FFFFFF"/>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="product-price">
                        ${product.price}
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
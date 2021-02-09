import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Rating from 'components/commons/Rating';

type FilterOptions = {
    value: string;
    label: string;
    prependValue?: number;
};

type Filter = {
    filterName: string;
    filterType: string;
    options?: FilterOptions[];
    ratings?: RatingOptions[];
}

type RatingOptions = {
    value: number;
    quantity: number;
}


const Home: React.FC = () => {
    const multiRangeOptions: FilterOptions[] = [
        {
            value: '10',
            label: '$10'
        },
        {
            value: '10-100',
            label: '$10 - $100'
        },
        {
            value: '100-550',
            label: '$100 - $550'
        },
        {
            value: 'all',
            label: 'All'
        },
    ];

    const categoryOptions: FilterOptions[] = [
        {
            value: 'cellPhones',
            label: 'Cell Phones',
            prependValue: 1920
        },
        {
            value: 'computers&TabletsCell',
            label: 'Computers & Tablets Cell',
            prependValue: 1820
        },
        {
            value: 'audio',
            label: 'Audio',
            prependValue: 120
        },
        {
            value: 'iPhoneAccessories',
            label: 'iPhone Accessories',
            prependValue: 353
        },
    ];

    const brandOptions: FilterOptions[] = [
        {
            value: 'insigni',
            label: 'Insigni',
            prependValue: 220
        },
        {
            value: 'samsung',
            label: 'Samsung',
            prependValue: 120
        },
        {
            value: 'apple',
            label: 'Apple',
            prependValue: 320
        },
        {
            value: 'HP',
            label: 'HP',
            prependValue: 32
        },
    ];

    const ratings: RatingOptions[] = [
        {
            quantity: 8500,
            value: 5
        },
        {
            quantity: 3250,
            value: 4
        },
        {
            quantity: 1120,
            value: 3
        },
    ]

    const filters:Filter[] = [
        {
            filterName: 'Multi Range',
            filterType: 'radio',
            options: multiRangeOptions,
        },
        {
            filterName: 'Category',
            filterType: 'checkbox',
            options: categoryOptions,
        },
        {
            filterName: 'Brand',
            filterType: 'checkbox',
            options: brandOptions,
        },
        {
            filterName: 'Ratings',
            filterType: 'rating',
            ratings
        },
        
    ];

    return (<div id="Filters">
        <Row>
            <Col lg="12">
                <div id="FilterTitle">
                    Filters
                </div>
            </Col>
        </Row>
        <Card className="CardFilter">
            <Card.Body>
                {filters.map((filter, indexFilter) => {
                    return (
                        <div key={`filter_${indexFilter}`}>
                            <div className="SectionTitle">
                                {filter.filterName}
                            </div>
                            {filter.options && filter.options.map((el, index) => {
                                return (<div key={`filterSection_${index}`} className="RadioBtnFilter">
                                    <input type={filter.filterType} value={el.value}  name={`group_${indexFilter}`} />
                                    <label>{el.label}</label>
                                    {el.prependValue && <span className="prependInfo">{el.prependValue}</span>}
                                </div>)
                            })}
                            {filter.ratings && filter.ratings.map((rating, indexRating) => {
                                return (
                                    <div key={`rating_${indexRating}`} className="ratingsFilter">
                                        <Rating rating={rating.value}/>
                                        {' & Up'}
                                        {rating.quantity && <span className="prependInfo">{rating.quantity}</span>}
                                    </div>
                                )
                            })}
                            {(filters.length - 1 !== indexFilter) && <hr/>}
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
        <div className="btnClearFilter">
            <Button>
                CLEAR ALL FILTERS
            </Button>
        </div>
    </div>);
}

export default Home;
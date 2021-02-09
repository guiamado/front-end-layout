import React from 'react';
import FontAwesomeIcons from 'components/commons/FontAwesomeIcons';

type Props = {
    rating: number;
}

const Rating: React.FC<Props> = (props) => {
    const { rating } = props;
    function stars() {
        const solidStars = [];
        for (let index = 0; index < rating; index++) {
            solidStars.push('faStarSolid');
        }

        if(rating === 5) {
            return solidStars;
        }

        const regularStars = [];

        for (let index = 0; index < (5 - rating ); index++) {
            regularStars.push('faStarRegular');
        }

        return [...solidStars, ...regularStars];
    }

    const starsRating = stars();
    return (
    <span id="Rating">
        {starsRating.map((el, index) => {
            return (<span key={`star_${index}`}>
                {el === 'faStarSolid' && <FontAwesomeIcons icon="faStarSolid" color="#FFAB00" />}
                {el === 'faStarRegular' && <FontAwesomeIcons icon="faStarRegular" color="#C4C4C4" />}
            </span>)
        })}
    </span>
    );
}

export default Rating;

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown as faChevronDownSolid,
    faChevronRight as  faChevronRightSolid,
    faFilter as faFilterSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
    faCheckSquare as faCheckSquareRegular,
    faCommentAlt as faCommentAltRegular,
    faEnvelope as faEnvelopeRegular,
    faCalendar as faCalendarRegular,
    faStar as faStarRegular,
    faBell as faBellRegular,
    faCircle as faCircleRegular,
} from "@fortawesome/free-regular-svg-icons";

type Props = {
    color?: string;
    icon: string;
};

const FontAwesomeIcons: React.FC<Props> = (props) => {
    const {color = "#FFFFFF", icon } = props;
    const CheckIconFontAwesome = () => {
        switch (icon) {
            case 'faCheckSquareRegular':
                return <FontAwesomeIcon icon={faCheckSquareRegular} color={color}/>;
            case 'faCommentAltRegular':
                return <FontAwesomeIcon icon={faCommentAltRegular} color={color}/>;
            case 'faEnvelopeRegular':
                return <FontAwesomeIcon icon={faEnvelopeRegular} color={color}/>;
            case 'faCalendarRegular':
                return <FontAwesomeIcon icon={faCalendarRegular} color={color}/>;
            case 'faStarRegular':
                return <FontAwesomeIcon icon={faStarRegular} color={color}/>;
            case 'faBellRegular':
                return <FontAwesomeIcon icon={faBellRegular} color={color}/>;
            case 'faCircleRegular':
                return <FontAwesomeIcon icon={faCircleRegular} color={color}/>;
            case 'faChevronDownSolid':
                return <FontAwesomeIcon icon={faChevronDownSolid} color={color}/>;
            case 'faChevronRightSolid':
                return <FontAwesomeIcon icon={faChevronRightSolid} color={color}/>;
            case 'faFilterSolid':
                return <FontAwesomeIcon icon={faFilterSolid} color={color}/>;
            default:
                return <span></span>;
        }
    };

    return <CheckIconFontAwesome />;
}

export default FontAwesomeIcons;
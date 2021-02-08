import React, { CSSProperties } from 'react';
import Grid from './Grid';
import Home from './Home';
type Props = {
    style?: CSSProperties;
    fill?: string;
    width?: string | number;
    className?: string;
    viewBox?: string;
    icon: string;
};

const Icons: React.FC<Props> = (props) => {
    
    const CheckIcon = () => {
        switch (props.icon) {
            case 'grid':
                return (<Grid {...props}/>);
            case 'home':
                return (<Home {...props} />);
            default:
                return <span></span>;
        }
    };

    return <CheckIcon />;
}

export default Icons;
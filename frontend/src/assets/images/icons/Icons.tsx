import React, { CSSProperties } from 'react';
import Archive from './Archive';
import CheckCircle from './CheckCircle';
import Copy from './Copy';
import CreditCard from './CreditCard';
import Droplet from './Droplet';
import FileText from './FileText';
import Grid from './Grid';
import Home from './Home';
import Layout from './Layout';
import SideBar from './SideBar';

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
            case 'archive':
                return (<Archive {...props} />);
            case 'checkCircle':
                return (<CheckCircle {...props} />);
            case 'copy':
                return (<Copy {...props} />);
            case 'creditCard':
                return (<CreditCard {...props} />);
            case 'droplet':
                return (<Droplet {...props} />);
            case 'fileText':
                return (<FileText {...props} />);
            case 'layout':
                return (<Layout {...props} />);
            case 'sideBar':
                return (<SideBar {...props} />);
            default:
                return <span></span>;
        }
    };

    return <CheckIcon />;
}

export default Icons;
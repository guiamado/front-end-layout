import React from 'react';
import FontAwesomeIcons from 'components/commons/FontAwesomeIcons';

type Props = {
    onClickFab: (data?: any) => void;
    icon?: string;
}

const FloatingActionButton: React.FC<Props> = (props) => {
    const { onClickFab, icon = 'faFilterSolid' } = props;
    return (
    <div id="FloatingActionButton">
        <button className="fab" onClick={() => onClickFab()}>
            <FontAwesomeIcons icon={icon}/>
        </button>
    </div>
    );
}

export default FloatingActionButton;

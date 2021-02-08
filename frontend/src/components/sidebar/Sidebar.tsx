import React from 'react';
import Icons from 'assets/images/icons/Icons';
import FontAwesomeIcons from 'components/commons/FontAwesomeIcons';
import Dropdown from 'components/commons/Dropdown';

export type SidebarItem = {
    text: string;
    icon?: string;
    isDropdown?: boolean;
    isTitle?: boolean;
    childs?: any[];
    hasPrependIcon?: boolean;
};

const Home: React.FC = () => {
    const sidebarItens: SidebarItem[] = [
        {
            text: 'Dashboard',
            icon: 'home',
            isDropdown: true,
            childs: [
                {
                    text: 'eCommerce'
                },
            ]
        },
        {
            text: 'APPS',
            isTitle: true,
        },
        {
            text: 'Email',
            icon: 'faEnvelopeRegular',
        },
        {
            text: 'Chat',
            icon: 'faCommentAltRegular',
        },
        {
            text: 'Todo',
            icon: 'faCheckSquareRegular',
        },
        {
            text: 'Calendar',
            icon: 'faCalendarRegular',
        },
        {
            text: 'UI ELEMENTS',
            isTitle: true,
        },
        {
            text: 'Grid',
            icon: 'faEnvelopeRegular',
            hasPrependIcon: true,
        },
        {
            text: 'Colors',
            icon: 'faCommentAltRegular',
        },
        {
            text: 'Card',
            icon: 'faCheckSquareRegular',
            hasPrependIcon: true,
        },
        {
            text: 'Table',
            icon: 'faCalendarRegular',
        },
    ];


    return (<div id="Sidebar">
        {sidebarItens.map((el, index) => {
            return (
                <>
                    {el.isDropdown && (
                        <Dropdown item={el} index={index} />
                    )}
                    {el.isTitle && (
                        <div className="sidebarTitle">{el.text}</div>
                    )}
                    {!el.isDropdown && !el.isTitle && (
                        <div
                            className="itemSidebar"
                            key={`itemSidebar_${index}`}
                            style={{display: !el.hasPrependIcon ? 'table' : ''}}
                        >
                            <span className="itemSidebarIcon">
                                <FontAwesomeIcons icon={String(el.icon)} color="#606060"/>
                            </span>
                            {el.text}
                            {el.hasPrependIcon && (
                                <span className="prependIconSidebar">
                                    <FontAwesomeIcons icon="faChevronRightSolid" color="#606060"/>
                                </span>
                            )}
                        </div>
                    )}
                </>
            );
        })}
    </div>);
}

export default Home;
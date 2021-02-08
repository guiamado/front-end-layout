import React from 'react';
import Icons from 'assets/images/icons/Icons';
import FontAwesomeIcons from 'components/commons/FontAwesomeIcons';
import Dropdown from 'components/commons/Dropdown';
import LogoGranCursos from 'assets/images/LogoGranCursos.svg';
import Utils from 'components/commons/Utils';

export type SidebarItem = {
    text: string;
    icon?: string;
    isDropdown?: boolean;
    isTitle?: boolean;
    childs?: any[];
    hasPrependIcon?: boolean;
    isIconSvg?: boolean;
};

type Props = {
    onCloseSidebar: (data?: any) => void;
}

const Home: React.FC<Props> = (props) => {
    const { onCloseSidebar } = props;
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
            icon: 'layout',
            hasPrependIcon: true,
            isIconSvg: true,
        },
        {
            text: 'Colors',
            icon: 'droplet',
            isIconSvg: true,
        },
        {
            text: 'Card',
            icon: 'creditCard',
            hasPrependIcon: true,
            isIconSvg: true,
        },
        {
            text: 'Table',
            icon: 'grid',
            isIconSvg: true,
        },
        {
            text: 'Components',
            icon: 'archive',
            isIconSvg: true,
            hasPrependIcon: true,
        },
        {
            text: 'FORMS',
            isTitle: true,
        },
        {
            text: 'Form Elements',
            icon: 'copy',
            hasPrependIcon: true,
            isIconSvg: true,
        },
        {
            text: 'Form Layouts',
            icon: 'sideBar',
            isIconSvg: true,
        },
        {
            text: 'Form Wizard',
            icon: 'fileText',
            isIconSvg: true,
        },
        {
            text: 'Form Validation',
            icon: 'checkCircle',
            isIconSvg: true,
        },
    ];


    return (<div id="Sidebar">
        <div>
            <img src={LogoGranCursos} alt="" height="30" width="162"/>
            {Utils.isSmallDevice && (
                <span id="closeSidebar" onClick={() => onCloseSidebar()}>&times;</span>
            )}

        </div>
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
                                {el.isIconSvg ? (
                                    <Icons icon={String(el.icon)} />
                                ) : (
                                    <FontAwesomeIcons icon={String(el.icon)} color="#606060"/>
                                )}
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
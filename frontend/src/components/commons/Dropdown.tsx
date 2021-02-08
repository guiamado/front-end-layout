import React, { useState } from 'react';
import Icons from 'assets/images/icons/Icons';
import FontAwesomeIcons from 'components/commons/FontAwesomeIcons';
import { SidebarItem } from 'components/sidebar/Sidebar';
type Props = {
    item: SidebarItem;
    index: number;
}
const Home: React.FC<Props> = props => {
    const { item, index } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (<span key={`dropdown_${index}`}>
        <div
            className="dropdown-item-sidebar"
            onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}
            style={{ marginBottom: !isDropdownOpen ? 25 : 0 }}
        >
            <Icons icon={String(item.icon)} style={{ marginRight: 7 }} />
            <span className="dropdown-title">{item.text}</span>
            <span className="action-dropdown">
                <FontAwesomeIcons icon="faChevronDownSolid" color="#FFFFFF"/>
            </span>
        </div>
        {isDropdownOpen && item.childs?.map((child, childIndex) => {
            return (
                <div
                    className="child-dropdown"
                    key={`childDrop_${childIndex}`}
                    style={{ marginBottom: item.childs && (item.childs.length - 1 === childIndex) ? 25 : 0 }}
                >
                    <span className="child-dropdown-icon">
                        <FontAwesomeIcons icon="faCircleRegular" color="#606060"/>
                    </span>
                    {child.text}
                </div>
            )
        })}
    </span>);
}

export default Home;
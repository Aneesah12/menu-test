import React, {useState} from "react";
import {MenuItems} from "./menuItems";

interface MenuItemProps {
    // readonly drinks: any,
}
interface MenuProps {
    readonly clickForMenuItems: () => Promise<MenuItemProps[]>;
    readonly id: string;
    readonly name: string;
}
export default function menuWithSolid ({clickForMenuItems, id, name}: MenuProps) {
    const [menuItems, setMenuItems] = useState(null);
    const [displayMenuItems, setDisplayMenuItems] = useState(false);

    const handleFetch = async () => {
        const fetchedMenuItems = await clickForMenuItems();
        setMenuItems(fetchedMenuItems);
        setDisplayMenuItems(!displayMenuItems);
    }

    return <>

        <button onClick={handleFetch}>Click me!</button>
        {displayMenuItems &&
            <ul>
                {menuItems.map(menuItem => {
                    return (
                        <li key={menuItem[id]}>
                            <div>
                                <MenuItems menuItemName={menuItem[name]}/>
                            </div>
                        </li>
                    );
                })}
            </ul>}
    </>;
}
interface MenuItemNameProps {
    menuItemName: string
}

export const MenuItems = ({menuItemName}: MenuItemNameProps) => {
    return <h3>{menuItemName}</h3>
}
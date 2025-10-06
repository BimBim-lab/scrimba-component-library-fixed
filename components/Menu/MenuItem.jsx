import React from "react"
import { MenuContext } from "./Menu"

export default function MenuItem({ children, onClick }) {
    const { close } = React.useContext(MenuContext)
    return (
        <div className="menu-item" onClick={onClick && (() => { onClick(); close(); })
        }>
            {children}
        </div>
    )
}
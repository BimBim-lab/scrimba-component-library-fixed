import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
        initialValue: false, 
        onToggle: onOpen
    })

    const close = () => {
        if (open) toggleOpen()
    }

    return (
        <MenuContext.Provider value={{ open, toggleOpen, close }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

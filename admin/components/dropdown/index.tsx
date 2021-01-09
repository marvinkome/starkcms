import React, { useState } from "react"
import classnames from "classnames"
import styles from "./dropdown.module.scss"

type Props = {
    toggle: JSX.Element
    children: JSX.Element[]
}

export function Dropdown(props: Props) {
    const [dropdownOpen, setDropdownState] = useState(false)

    const closeDropdown = () => {
        setDropdownState(false)
        document.removeEventListener("click", closeDropdown)
    }

    const openDropdown = () => {
        setDropdownState(true)
        // close the dropdown when document is clicked
        document.addEventListener("click", closeDropdown, { capture: true })
    }

    const dropdownClass = classnames(styles.dropdown_container, {
        [styles.isOpen]: dropdownOpen,
    })

    return (
        <>
            <div onClick={dropdownOpen ? closeDropdown : openDropdown}>{props.toggle}</div>

            <div className={dropdownClass}>
                <div className={styles.clip_arrow} />
                <div className={styles.dropdown}>{props.children}</div>
            </div>
        </>
    )
}

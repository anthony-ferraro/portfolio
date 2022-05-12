import React from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
const Header = ({ router }) => {
    const [showDropdown, setShowDropdown] = React.useState(false);
    return (
        <>
            <div className="header">
                <div className="logo">
                    AF
                </div>
                <div className="hamburger" onClick={() => setShowDropdown(!showDropdown)}>
                    <GiHamburgerMenu></GiHamburgerMenu>
                </div>
                <div className={`hamburger-dropdown ${showDropdown ? "active" : ""}`}>
                    <Link href="/">
                        <a onClick={() => setShowDropdown(false)}>Home</a>
                    </Link>
                    <Link href="/portfolio">
                        <a onClick={() => setShowDropdown(false)}>Portfolio</a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={() => setShowDropdown(false)}>Contact</a>
                    </Link>
                </div>
                <div className="links">
                    <Link href="/" passHref={true}><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link>
                    <Link href="/portfolio" passHref={true}><a className={router.pathname === "/portfolio" ? "active" : ""}>Portfolio</a></Link>
                    <Link href="/contact" passHref={true}><a className={router.pathname === "/contact" ? "active" : ""}>Contact Me</a></Link>
                </div>
            </div>
        </>
    )
}

export default Header

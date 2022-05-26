import React from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="left">
                    <div className="logo">
                        <Link href="/">AF</Link>
                    </div>
                    <div className="links">
                        <Link href="/">Home</Link>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/contact">Contact Me</Link>
                    </div>
                </div>
                <div className="connections">
                    <a href="https://github.com/anthony-ferraro" target="_blank" rel="noreferrer">
                        <BsGithub color="white" size="25"></BsGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/a-ferraro/" target="_blank" rel="noreferrer">
                        <BsLinkedin color="white" size="25"></BsLinkedin>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
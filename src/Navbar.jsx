import React from "react"
import "./Navbar.css"

function Navbar(){
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__li"><a className="navbar__link" href="#"> <span> Home</span></a></li>
                <li className="navbar__li"><a className="navbar__link" href="#"> <span>About</span> </a></li>
                <li className="navbar__li"><a className="navbar__link" href="#"><span>Projects</span></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
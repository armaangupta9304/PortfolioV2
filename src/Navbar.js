import React from "react"
import "./Navbar.css"

function Navbar(){
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__li"><a className="navbar__link" href="#">Home</a></li>
                <li className="navbar__li"><a className="navbar__link" href="#">About</a></li>
                <li className="navbar__li"><a className="navbar__link" href="#">Projects</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
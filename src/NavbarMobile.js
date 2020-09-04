import React from "react"
import "./Hamburger.css"

function openMenu(){
    document.getElementById("menu__options").style.height = "100vh";
}

function Hamburger(){

    return (
        <div className="Hamburger">
            <div className="menu__buttons">
                <span onClick={() => document.getElementById("menu__options").style.height = "100vh"}>&#9776;</span>
            </div>
            <div className="menu__options" id="menu__options">
                <span className="closeMenu" onClick={() => document.getElementById("menu__options").style.height = "0vh"}>&times;</span>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Projects</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger;
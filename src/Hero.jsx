import React, {useState} from "react"
import Navbar from "./Navbar.jsx"
import Hamburger from "./NavbarMobile.jsx"
import "./App.css"

function Hero(){
    
    const [date] = useState(new Date())
    const [hours, setTime] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    
    setInterval(() => {
        setMinutes(new Date().getMinutes().toLocaleString())
    }, 600)

    setInterval(() => {
        setTime(new Date().getHours().toLocaleString())
    }, 600)

    return (
    <div className="root__div">
      <Hamburger />
      <div className="current__date">

        <h1 className="Date">{`${date.toDateString()}`}</h1>
        <h2>{`${hours}:${minutes}`}</h2>
      </div>
      <div className="circle__bg"></div>
      <div className="flex">
        <div className="border__outer">
            <h1 className="title__name">Hi I Am Armaan.</h1>
            <p className="title__bio">A Web Dev And A Data Scientist!</p>
        </div>
        <Navbar />
      </div>
      <div className="personal__buttons">
        <a className="button__blogs">
          Blogs!
        </a>
        <a>
          <i class="fa fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Hero;
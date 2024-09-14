import React from "react"
import { Link } from "react-router-dom";

import "./Navbar.scss"
const NavBar = () => {
    return (<>

        <div className="navbar">
            <>
                <Link to = '/' className = "navbar-item">Why TaskDAQ</Link>
                <Link to="/goals/" className="navbar-item">Goals</Link>
                <Link to="/stonks/" className="navbar-item">Stonks</Link>

            </>
        </div>
    </>)
}
export default NavBar
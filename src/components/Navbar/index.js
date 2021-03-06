import React from 'react'
import './style.css'

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Andrew Bergstrom</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">

                <ul className="navbar-nav ml-auto flex-nowrap ">
                    <li className="nav-item ml-auto ">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item ml-auto">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item ml-auto">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                   
                   
                </ul>
  </div>
</nav>
)


}

export default Navbar;
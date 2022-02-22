import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./index.css";
const Nav = () => {
    return (
        <>
        
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12-mx-auto">

                   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Jay Technical</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="act" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="act" className="nav-link" to="/Service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="act" className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="act" className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </div>


</div>

</div>
{/* </section> */}
        </>
    );
}
export default Nav;

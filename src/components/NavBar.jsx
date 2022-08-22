import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function NavBar () {
    return (
        <header className="App-header">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link to="/">   
                            <h1 className="navbar-brand" href="#">Tienda Cocina</h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <Link to="/category/1">
                                    <li className="nav-item">
                                    <span className="nav-link" aria-current="page" href="#">Sartenes</span>  
                                    </li>
                                </Link>
                                <Link to="/category/2">
                                    <li className="nav-item">
                                    <span className="nav-link" href="#">Cacerolas</span>
                                    </li>      
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <Link to={"/cart"}>
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <CartWidget />
                                </ul>
                            </Link>
                        </div>
                    </div>
                </nav>
        </header>
    );
}

export default NavBar;
import React from "react";
import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <div className="NavBarContainer">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda Cocina</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                            </li>      
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
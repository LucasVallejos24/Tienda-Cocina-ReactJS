import React from "react";
import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <div className="NavBarContainer">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tienda Cocina</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
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
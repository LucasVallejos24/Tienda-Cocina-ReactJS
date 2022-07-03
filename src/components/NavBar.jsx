import React from "react";

function NavBar () {
    return (
        <div className="NavBarContainer">
            <div className="LogoContainer">
                <a className="LogoLink" href="#"><span className="Logo">Tienda Cocina</span></a>
            </div>

            <nav className="NavContainer">
                <ul>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Carrito</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
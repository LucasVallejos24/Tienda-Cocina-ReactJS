import React from "react";
import { useContext } from 'react';
import { CartContext } from './CartContext';

function CartWidget () {
    const test = useContext(CartContext);

    return(
        <li className="nav-item">
            <i className='bx bx-cart fs-4'></i>
            <span>{test.totalProduct() || ''}</span>
        </li>
    );
}

export default CartWidget;
import React from 'react'
import ItemCount from './ItemCount'
import {useState, useContext} from 'react';
import {Link} from "react-router-dom"
import { CartContext } from './CartContext';


const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert(`tu has seleccionado ${qty} productos.`);
        setItemCount(qty);
        test.addItem(item, qty)
    }

  return (
    <>
        <div className='detail_body'>
            <div className='detail_container '>                
                <div className='detail_img_container border'>
                    <div className='detail_img '>
                        <img className='img_product img-fluid' src={item.image}/>
                    </div>
                </div>
                <div className='detail_content_body border '>
                        <div className='detail_content border'>
                            <span className='detail_sell'>Nuevo/ {item.sell} vendidos</span>
                            <h1 className='detail_title'>{item.title}</h1>
                            <span className='detail_price'>$ {item.price} </span>
                            <br />
                            <span className='fs-4'>Stock: {item.stock}</span>
                            <p className='detail_delivery'>Llega gratis hoy </p>
                            <p className='detail_returns'>Devolución gratis</p>
                            <div className='detail_buy'>
                                {
                                    itemCount === 0
                                    ? <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} />
                                    : <>
                                    <Link to='/cart'><button className='btn btn-primary'>Chequear carrito</button></Link>
                                    <Link to='/'><button className='btn btn-primary'>Seguir comprando</button></Link>
                                </>
                                }
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail
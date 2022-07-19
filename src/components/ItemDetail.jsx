import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
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
                    {/* <div className='detail_content_container'>                         */}
                        <div className='detail_content border'>
                            <span className='detail_sell'>Nuevo/ {item.sell} vendidos</span>
                            <h1 className='detail_title'>{item.title}</h1>
                            <span className='detail_price'>$ {item.price} </span>
                            <p className='detail_delivery'>Llega gratis hoy </p>
                            <p className='detail_returns'>Devolución gratis</p>
                            <div className='detail_buy'>
                                <ItemCount initial={1} stock={item.stock} />
                                <button type="button" className='detail_add btn btn-primary fs-5 '>Agregar al carrito</button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemDetail
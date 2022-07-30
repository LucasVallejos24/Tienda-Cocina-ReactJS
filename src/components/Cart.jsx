import React from 'react'
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const test = useContext(CartContext);

  const removeItem = (id) =>{
    test.removeItem(id)
  }

  const clear = () =>{
    test.clear()
  }

  if(test.cartList.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    )
  }

  return (
    <>
    {/* <div> */}
      <table className="table table-striped">
        {/* <caption><button className='btn btn-secondary'>Vaciar carrito</button></caption> */}
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col">*</th>
            </tr>
        </thead>
          {

          test.cartList.length > 0 && test.cartList.map(item => (
        <tbody>
          <tr>
            <th scope="row"><img className='img_cart' src={item.image}/></th>
            <td>{item.title}</td>
            <td>{item.quantity}<span>x ${item.price}</span></td>
            <td>${item.quantity * item.price}</td>
            <td><button className='btn btn-danger' onClick={()=>removeItem(item.id)}>x</button></td>
          </tr>
        </tbody>
          ))
          }
        <tfoot>
          <tr>
            <td><p>Total: {test.totalPrice()}</p></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button className='btn btn-secondary' onClick={clear}>Vaciar carrito</button></td>
          </tr>
        </tfoot>
      </table>
      {/* <button></button>
    </div> */}
    </>
  )
}

export default Cart
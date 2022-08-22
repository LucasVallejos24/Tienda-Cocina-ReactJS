import React from 'react'
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {collection, serverTimestamp, setDoc, doc, updateDoc, increment} from 'firebase/firestore';
import { db } from '../utils/FirebaseConfig';

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

  const createOrder = () => {
    let itemsForDB = test.cartList.map (item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity
    }))

    let order = {
      buyer: {
        email: 'comprador@algo.com',
        name: 'comprador X',
        phone: '555-555-555'
      },
      date: serverTimestamp(),
      items:itemsForDB,
      total: test.totalPrice()
    }
    console.log(order)

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, 'orders'))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }

    createOrderInFirestore()
      .then(result => alert('Tu orden ha sido creado. ID=' + result.id))
      .catch(e => console.log(e))

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, 'products', item.id)
      await updateDoc(itemRef, {
        stock: increment(-item.quantity)
      })
    })

    // borrar carrito
    test.clear()
  }

  return (
    <>
      <table className="table table-striped">
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
            <td><p>Total: ${test.totalPrice()}</p></td>
            <td></td>
            <td></td>
            <td><button className='btn btn-secondary' onClick={clear}>Vaciar carrito</button></td>
            <td><button className='btn btn-secondary' onClick={createOrder}>Finalizar compra</button></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Cart
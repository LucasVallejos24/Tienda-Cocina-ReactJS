import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCartList(cartList.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else {
            setCartList([...cartList, {...item, quantity}]);
        }
    }

    console.log(cartList);

    const clear = () => setCartList([]);

    const removeItem = (id) => setCartList(cartList.filter(product => product.id !== id));

    const isInCart = (id) => cartList.find(product => product.id === id) ?true:false;

    const totalPrice = () => {
        return cartList.reduce((prev, prod) => prev + prod.quantity * prod.price, 0);
    }

    const totalProduct = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  return (
    <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart, totalPrice, totalProduct}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
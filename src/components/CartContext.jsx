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

  return (
    <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
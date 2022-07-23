import React, {useState} from "react";

const ItemCount = ({initial=1,stock, onAdd}) => {
    const [count, setCount] = useState(0);

    const increaseClick = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decrementClick = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return(
        <>
            <div className="countContainer">
                <button onClick={decrementClick}>-</button>
                <p>{count}</p>
                <button onClick={increaseClick}>+</button>                
            </div>
            {
                stock && count
                ?<button type="button" onClick={()=> onAdd(count)} className='detail_add btn btn-primary fs-5 '>Agregar al carrito</button>
                :<button className="btn btn-primary" disabled>Agregar al carrito</button>
            }
        </>
    )
}

export default ItemCount;
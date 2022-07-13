import React, {useState} from "react";

const ItemCount = ({initial,stock}) => {
    const [count, setCount] = useState(initial);

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
        <div className="countContainer">
            <button onClick={decrementClick}>-</button>
             <p>{count}</p>
             <button onClick={increaseClick}>+</button>
        </div>
    )
}

export default ItemCount;
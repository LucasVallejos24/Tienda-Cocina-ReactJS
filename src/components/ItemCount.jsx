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
        <div className=" card cardContainer">
            <img src="https://www.essen.com.ar/contenido/objetos/1/aquasarten24cm.jpg" className="card-img-top " />
            <div className="cardInformation">
                <h5 className="card-title">Sarten 24cm</h5>
                <div className="countContainer">
                    <button onClick={decrementClick}>-</button>
                    <p>{count}</p>
                    <button onClick={increaseClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
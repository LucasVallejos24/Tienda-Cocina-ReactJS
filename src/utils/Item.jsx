import React from "react";
import ItemCount from "../components/ItemCount";
import {Link} from "react-router-dom"

const Item = ({products}) => {
    return(
        <>
        <div className=" card cardContainer">
            <img src={products.image[0]} className="card-img-top " />
            <div className="cardInformation">
                <h5 className="card-title">{products.title}</h5>
                <p>Stock: {products.stock}</p>
                <p className="card-price">${products.price}</p>
                <Link to={`/item/${products.id}`}>
                    <p className="card_info">+ info</p>
                </Link>
                {/* <ItemCount initial={1} stock={products.stock} /> */}
            </div>
        </div>
        </>
    )
}

export default Item;
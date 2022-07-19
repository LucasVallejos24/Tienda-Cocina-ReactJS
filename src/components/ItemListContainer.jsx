import React, {useState, useEffect} from "react";
import ItemList from "../containers/ItemList"; 
import products from "../data/ProductsData";

let ok = true;

const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        productContainer(2000, products)
            .then((res) => setProductsList(res))
            .catch((err) => {console.log(err)})

            console.log(productsList)
    }, []);


    return(
        <>
        <div className="productContainer">
            <ItemList Items= {productsList} />
        </div>
        </>
    )
}

export default ItemListContainer
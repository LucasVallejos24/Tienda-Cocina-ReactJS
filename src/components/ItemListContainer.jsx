import React, {useState} from "react";
import { products } from "../data/ProductsData";
import ItemList from "../containers/ItemList"; 


let ok = true;

const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([]);

    const productContainer = () => {
        return new Promise ((resolve, reject) => {
            if(ok) {
                setTimeout(() => {
                    resolve(products)
                }, 2000);
            }else {
                reject("ERROR")
            }
        })
    }

    productContainer()
        .then((res) => {setProductsList(res)})
        .catch((err) => {console.log(err)})

    return(
        <>
        <div className="productContainer">
            <ItemList Items= {productsList} />
        </div>
        </>
    )
}

export default ItemListContainer
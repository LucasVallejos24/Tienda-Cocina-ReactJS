import React, {useState, useEffect} from "react";
import ItemList from "../containers/ItemList"; 
import products from "../data/ProductsData";
import CustomFetch from "../utils/CustomFetch";
import {useParams} from "react-router";


const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if(categoryId === undefined) {
            CustomFetch(2000, products)
                .then((res) => setProductsList(res))
                .catch((err) => {console.log(err)})
            }else {
                CustomFetch(2000, products.filter(item => item.category.id == categoryId))
                    .then((res) => setProductsList(res))
                    .catch((err) => {console.log(err)})
        }

            console.log(productsList)
    }, [categoryId]);


    return(
        <>
        <div className="productContainer">
            <ItemList Items= {productsList} />
        </div>
        </>
    )
}

export default ItemListContainer
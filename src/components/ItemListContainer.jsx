import React, {useState, useEffect} from "react";
import ItemList from "../containers/ItemList"; 
// import products from "../data/ProductsData";
// import CustomFetch from "../utils/CustomFetch";
import {useParams} from "react-router";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../utils/FirebaseConfig";


const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        // if(categoryId === undefined) {
        //     CustomFetch(2000, products)
        //         .then((res) => setProductsList(res))
        //         .catch((err) => {console.log(err)})
        //     }else {
        //         CustomFetch(2000, products.filter(item => item.category.id == categoryId))
        //             .then((res) => setProductsList(res))
        //             .catch((err) => {console.log(err)})
        // }

        const querycollection = collection(db, 'products');
        if(categoryId) {
            const queryfilter = query(querycollection, where('category', '==', categoryId))
            getDocs(queryfilter)
                .then(res => setProductsList(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }else {
            getDocs(querycollection)
                .then(res => setProductsList(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }

            // console.log(productsList)
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
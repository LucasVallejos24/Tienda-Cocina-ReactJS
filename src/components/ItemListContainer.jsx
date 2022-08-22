import React, {useState, useEffect} from "react";
import ItemList from "../containers/ItemList"; 
import {useParams} from "react-router";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../utils/FirebaseConfig";


const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {

        const querycollection = collection(db, 'products');
        if(categoryId) {
            const queryfilter = query(querycollection, where('category', '==', categoryId))
            getDocs(queryfilter)
                .then(res => setProductsList(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }else {
            getDocs(querycollection)
                .then(res => setProductsList(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }
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
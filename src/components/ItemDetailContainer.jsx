import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from "react-router"
import CustomFetch from '../utils/CustomFetch';
import products from '../data/ProductsData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({});
    const {id} = useParams();

    useEffect (() => {
        CustomFetch(2000, products)
        .then(result => setDataProduct(result.find(product => product.id == id)))
        .catch(err => console.log(err))

        console.log(dataProduct);
    }, [])

  return (
    <>
        <ItemDetail item={dataProduct} />
    </>
  )
}

export default ItemDetailContainer
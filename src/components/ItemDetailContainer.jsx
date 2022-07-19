import React from 'react';
import { useState, useEffect } from 'react';
import CustomFetch from '../utils/CustomFetch';
import products from '../data/ProductsData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({});

    useEffect (() => {
        CustomFetch(2000, products[0])
        .then(result => setDataProduct(result))
        .catch(err => console.log(err))
    }, [])

  return (
    <>
        <ItemDetail item={dataProduct} />
    </>
  )
}

export default ItemDetailContainer
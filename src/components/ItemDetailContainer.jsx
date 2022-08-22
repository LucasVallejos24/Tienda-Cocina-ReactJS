import React from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams} from "react-router"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({});
    const {id} = useParams();

    useEffect (() => {
      const querydb = getFirestore();
      const querydoc = doc(querydb, 'products', id);
      getDoc(querydoc)
        .then(res => setDataProduct({id:res.id, ...res.data()}))
      
    }, [])

  return (
    <>
        <ItemDetail item={dataProduct} />
    </>
  )
}

export default ItemDetailContainer
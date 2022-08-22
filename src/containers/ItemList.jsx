import Item from "../utils/Item";

const ItemList = ({Items}) => {
    return(
        <>
        {
            Items.map(item => < Item key={item.id} products={item}/>)
        }
        </>
    )
}

export default ItemList;
const products = [
    {
        id:1,
        title:"Sarten aqua",
        stock:10,
        price:100,
        sell:4,
        categoryId:1,
        image:["https://www.essen.com.ar/contenido/objetos/1/aquasarten24cm.jpg"],
        category:{
            name:"sarten",
            id:1
        }

    },
    {
        id:2,
        title:"Sarten terra",
        stock:5,
        price:200,
        sell:8,
        categoryId:1,
        image:["https://www.essen.com.ar/contenido/objetos/1/terrasarten24cm.jpg"],
        category:{
            name:"sarten",
            id:1
        }
    },
    {
        id:3,
        title:"Cacerola aqua",
        stock:10,
        price:100,
        sell:12,
        image:["https://www.essen.com.ar/contenido/objetos/1/aquacacerola24cm.jpg"],
        category:{
            name:"ollas",
            id:2
        }
    },
    {
        id:4,
        title:"Cacerola terra",
        stock:5,
        price:200,
        sell:16,
        image:["https://www.essen.com.ar/contenido/objetos/1/terracacerola24cm.jpg"],
        category:{
            name:"ollas",
            id:2
        }
    }
]

export default products;
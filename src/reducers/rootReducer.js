import axios from 'axios';

let initState = {
    dealProducts:[
        {id:1, name: "Apple Macbook Air 32 GB RAM", price: 145000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:2, name: "Apple Iphone 32 GB", price: 50000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:3, name: "Apple Full Desktop", price: 224500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:4, name: "Apple Ipad 64 GB", price: 45000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:5, name: "Apple Ipods 32GB", price: 35500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:6, name: "Crucial SSD 240GB", price: 2700, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:7, name: "ADATA RAM 8GB 2666 Mhz", price: 2100, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:8, name: "Crucial SSD 480GB", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 }
    ],
    userProducts:[
        {id:9, name: "Apple Macbook Air 64 GB RAM", price: 150000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:10, name: "Apple Iphone 64 GB", price: 60000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:11, name: "Apple Full Desktop Latest", price: 250000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:12, name: "Apple Ipad 32 GB", price: 42000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:13, name: "Apple Ipods 64GB", price: 40000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:14, name: "Crucial SSD 120GB", price: 1800, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:15, name: "ADATA RAM 8GB 2400 Mhz", price: 2000, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
        {id:16, name: "Crucial SSD 512GB", price: 5400, img: "https://picsum.photos/id/0/200/300", rating: 4.0 }
    ],
    myCart:[ ]
}

// let initState = {};

// async function getAll(){
//     let details = await axios.get("/api/products/deal");
//     let products = details.data['products'];
//     let dp = [];
//     for(let prod in products){
//         let obj = {
//             id:products[prod].product_id,
//             name:products[prod].product_name,
//             price:products[prod].product_price,
//             img:products[prod].product_image,
//             rating:products[prod].product_rating
//         }
//         dp.push(obj);
//     }
//     initState.dealProducts = dp;
//     initState.userProducts = dp;
//     initState.myCart = [];
// }

// getAll();

const myRootReducer = (state = initState,action)=>{
    if(action.type === "ADD_CART"){
        let product = state.dealProducts.find((prod)=>{
            return prod.id === action.id;
        });
        if(!product){
            product = state.userProducts.find((prod)=>{
                return prod.id === action.id;
            })
        }
        return{
            ...state,
            myCart:[...state.myCart,product]
        };
    }
    else if(action.type === "REMOVE_CART"){
        let newCart = state.myCart.filter((prod)=>{
            return prod.id != action.id;
        });
        return {
            ...state,
            myCart:newCart
        } 
    }
    else{
        return state;
    }
}

export default myRootReducer;
import React from 'react';
// import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

let product = {
    name :"Apple Macbook Air 32 GB RAM",
    price :"4500",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime"+ 
                "voluptates dignissimos minus voluptatum illum aliquid tempore nam quaerat aperiam error ratione velit"+
                "sequi, mollitia veniam saepe voluptate. Sint, consequatur fugiat esse possimus perspiciatis architecto eius harum ab," +
                "nobis nihil amet, nam enim voluptatem molestias voluptatibus expedita in",
    features:""
}

const ProductDisplay = (props) => {
    // const { product_id } = useParams();
    const redirectHome = (e)=>{
        e.preventDefault();
        props.history.push("/");
    }
    const addToCart = (e)=>{
        e.preventDefault();
    }
    return ( 
        <div className="product-display">
            <Navbar {... props} />
            <Navbar2 />
            {/* <h1>Product Number: <span>{ props.match.params.product_id }</span></h1> */}
            <div className="product-display-img">
                <img src="https://picsum.photos/id/0/200/300" alt="product-display-logo"/>
            </div>            
            <h1>Name: <span>{product.name}</span></h1>
            <h1>Price: <span>{product.price}</span></h1>
            <h1>Description: <span>{product.description}</span></h1>
            <h1>Features: <span>{product.features}</span></h1>
            <button onClick={redirectHome}>Back To Home &lt; </button>
            <button onClick={addToCart}> Add To Cart</button>
        </div>
     );
}
 
export default ProductDisplay;
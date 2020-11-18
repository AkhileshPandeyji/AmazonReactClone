import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={props.img}  alt="product-img" />
            </div>
            <div className="product-price red"><span><i class="fas fa-rupee-sign red"></i></span>{props.price}</div>
            <div className="product-title"><Link to={ "/product/"+props.id }>{props.name}</Link></div>
            <div className="product-rating">{props.rating}</div>
            <div className="product-add-btn"><button>Add To Cart</button></div>
        </div>
    );
}

export default ProductCard;
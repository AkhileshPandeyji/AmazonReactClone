import React from 'react';
const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="product-title">{props.title}</div>
            <div className="product-image">
                <img src={props.img}  alt="product-img" />
            </div>
            <div className="product-price">{props.price}</div>
            <div className="product-rating">{props.rating}</div>
        </div>
    );
}

export default ProductCard;
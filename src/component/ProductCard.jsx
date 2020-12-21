import React from 'react';
import { Link } from "react-router-dom";
import { cartValueContext } from '../contexts/cartValueContext';
import { useContext } from 'react';
import { connect } from 'react-redux';

const ProductCard = (props) => {
    // const { addOne } = useContext(cartValueContext);
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={props.img}  alt="product-img" />
            </div>
            <div className="product-price red"><span><i class="fas fa-rupee-sign red"></i></span>{props.price}</div>
            <div className="product-title"><Link to={ "/product/"+props.id }>{props.name}</Link></div>
            <div className="product-rating">{props.rating}</div>
            <div className="product-add-btn"><button onClick={()=>{props.addToCart(props.id)}}>Add To Cart</button></div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart : (id)=>{
            dispatch({type:"ADD_CART",id:id});
        }
    }
}
export default connect(null,mapDispatchToProps)(ProductCard);
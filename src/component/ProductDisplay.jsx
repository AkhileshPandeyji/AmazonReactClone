import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
// import { cartValueContext } from '../contexts/cartValueContext';
// import { useContext } from "react";
import {connect} from "react-redux";


let product = {
    name: "Apple Macbook Air 32 GB RAM",
    price: "4500",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime" +
        "voluptates dignissimos minus voluptatum illum aliquid tempore nam quaerat aperiam error ratione velit" +
        "sequi, mollitia veniam saepe voluptate. Sint, consequatur fugiat esse possimus perspiciatis architecto eius harum ab," +
        "nobis nihil amet, nam enim voluptatem molestias voluptatibus expedita in",
    features: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae praesentium maxime"
    ]
}

let prod = {name:""};

const ProductDisplay = (props) => {
    // const { product_id } = useParams();
    const [ addedToCart,toggleCart ] = useState(false);
    // const { addOne } = useContext(cartValueContext);
    
    const redirectHome = (e) => {
        e.preventDefault();
        props.history.push("/");
    }
    const addToCart = (e) => {
        e.preventDefault();
        if(addedToCart == false)
        props.addToCart(Number(props.match.params.product_id));
        toggleCart(true);        
    }

    const getProduct = ()=>{
        let prod = props.dealProducts.find((p)=>{
            return p.id == props.match.params.product_id;
        });
        if(!prod){
            prod = props.userProducts.find((p)=>{
                return p.id == props.match.params.product_id;
            });
        }
        return prod;
    }
    let prod = getProduct();

    return (
        <div className="product-display">
            <Navbar {...props} />
            <Navbar2 />d
            <div className="product-display-section">
                <div className="product-display-container">
                    <div className="product-display-image">
                        <img src={prod.img} alt="product-image" />
                    </div>
                    <div className="product-display-desc">
                        <h1>{prod.name}</h1>
                        <hr />
                        <p><span><i className="fas fa-rupee-sign fa-sm" style={{color:"black"}}></i></span>{prod.price}</p>
                        <hr />
                        {
                            product.features.map((feature) => {
                                return(
                                    <div>
                                        <ul>
                                            <li>{feature}</li>
                                        </ul>  
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="product-display-action">
                        <button className="primary" onClick={addToCart} disabled={addedToCart}>Add To Cart <span><i className="fas fa-shopping-cart fa-2x"></i></span></button>
                        <button className="secondary">Proceed To Checkout <span><i className="fas fa-dollar-sign fa-2x"></i></span></button>
                    </div>
                </div>
                <div className="product-display-offers">
                    <div>
                        <p className="red-color">Save Extra with 3 offers.</p>
                    </div>
                    <div>
                        <ul>
                            <li><span className="red-color">Bank Offer:</span> 10% Instant discount with AU Bank Debit Cards. Here's how </li>
                            <li><span className="red-color">Cashback (2):</span> 5% back with Amazon Pay ICICI Bank Credit card for Prime-members. 3% back for everybody else. Here's how </li>
                            <li>Get 10% up to ₹150 back, pay with Amazon Pay UPI. Valid only for select customers on App. Click here to check eligibility. Here's how </li>
                            <li><span className="red-color">Partner Offers (2):</span> Get 25% back up to ₹250 with Amazon Pay Later. Valid on 1st Pay Later transaction. Check eligibility here! Here's how </li>
                            <li>Get GST invoice and save up to 28% on business purchases. Sign up for free Here's how </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="product-display-query">
                    <h1>Have a question ?</h1>
                    <p>Find answers in product info, Q&As, reviews </p>
                    <form>
                        <span className="search"><i className="fas fa-search fa-md"></i></span>
                        <input type="text" placeholder="Type your question here" />
                    </form>
                </div>
                {/* <div className="product-display-adv">

                </div> */}
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart:(id)=>{
            dispatch({type:"ADD_CART",id:id});
        }
    };
}
const mapStateToProps = (state)=>{
    return{
        dealProducts:state.dealProducts,
        userProducts:state.userProducts
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDisplay);

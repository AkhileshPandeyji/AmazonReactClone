import React, { Profiler, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import { Link } from "react-router-dom";

const mycartItems = [
    {id:1,name:"Apple Iphone 6s",price:"50000",img:"https://picsum.photos/id/0/200/300"},
    {id:2,name:"Apple Iphone 12",price:"50000",img:"https://picsum.photos/id/0/200/300"},
    {id:3,name:"Apple Iphone 12",price:"50000",img:"https://picsum.photos/id/0/200/300"},
    {id:4,name:"Apple Iphone 12",price:"50000",img:"https://picsum.photos/id/0/200/300"},
    {id:5,name:"Apple Iphone 12",price:"50000",img:"https://picsum.photos/id/0/200/300"}
]

const MyCartBanner = () => {
    return (
        <div className="mycart-banner">
            <h1>Your Amazon Cart is empty.</h1>
            <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
            Continue shopping on the <Link to="/">Amazon.in homepage</Link>.
            </p>
        </div>
    )
}

const MyCartItem = (props)=>{
    return (
        <div className="mycart-item">
            <div className="mycart-item-img">
                <img src={props.img} alt="product-image" />
                <div className="mycart-item-details">
                    <h1>{props.name}</h1>
                    <p><span><i className="fas fa-rupee-sign red"></i></span> {props.price}</p>
                    <button className="mycart-item-del" onClick={()=>{props.deleteProd(props.id)}}>Delete</button>
                </div> 
                <button className="mycart-checkout">Proceed to Checkout <span><i className="fas fa-shopping-cart fa-lg"></i></span></button>               
            </div>           
        </div>
    )
}

const MyCart = (props) => {

    const [isEmpty, toggleEmpty] = useState({ isEmpty: false });
    const [prodList,changeProdList] = useState(mycartItems);
    const [total,changeTotal] = useState(0);
    const deleteProd = (id,e)=>{
        console.log(id);
        let newProdList = prodList.filter((prod) => { return prod.id != id;});
        changeProdList(newProdList);
    }
    const calculateSum = (prods)=>{
        let val = 0;
        prods.map((prod) => {
            val += Number(prod.price);
        })
        return val;
    }
    useEffect(()=>{
        if(prodList.length == 0 && isEmpty.isEmpty == false){
            toggleEmpty({isEmpty : !isEmpty.isEmpty});
        }
        changeTotal(calculateSum(prodList));
    })
    return (
        <div className="mycart-container">
            <Navbar {...props} />
            <Navbar2 />
            <div className="mycart-home">
                {
                    isEmpty.isEmpty ? <MyCartBanner /> : null
                }
                <div className="mycart-items">
                    <h1>Your items</h1>
                    <div className="mycart-items-container">
                        {
                            prodList.map((prod)=>{
                                return( <MyCartItem deleteProd={deleteProd} id={prod.id} name={prod.name} price={prod.price} img={prod.img} />
                                )
                            })
                        }
                    </div>
                    <div className="mycart-total">
                        <h1>SubTotal:<span><i className="fas fa-rupee-sign fa-md"></i></span>{total}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCart;
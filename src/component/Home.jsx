import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Slick from 'react-slick';
import { PrevArrow,NextArrow } from './Utility';
import { connect } from 'react-redux';
import axios from 'axios';

const Home = (props) => {
    const deal_products = props.dealProducts;
    const user_products = props.userProducts;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    return (
        <div className="home">
            <div className="home-deals">
                <div className="home-deals-title">
                    <h1>Today's Deals</h1>
                </div>
                <div className="home-deals-products">
                    <Slick {...settings}>
                    {
                        deal_products.map((product) => {
                            return (
                                <ProductCard id={product.id} name={product.name} img={product.img} price={product.price} rating={product.rating} />
                            )
                        })
                    }
                    </Slick>
                </div>
            </div>
            <div className="home-user">
                <div className="home-user-title">
                    <h1>Searched Products</h1>
                </div>
                <div className="home-user-products">
                    <Slick {...settings} >
                    {
                        user_products.map((product) => {
                            return (<ProductCard id={product.id} name={product.name} img={product.img} price={product.price} rating={product.rating} />)
                        })
                    }
                    </Slick>                    
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return{
        dealProducts:state.dealProducts,
        userProducts:state.userProducts,
        myCart:state.myCart
    }
}


export default connect(mapStateToProps,null)(Home);
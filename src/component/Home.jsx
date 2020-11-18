import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Slick from 'react-slick';
import { PrevArrow,NextArrow } from './Utility'

const dealProducts = [
    {id:1, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:2, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:3, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:4, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:5, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:6, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:7, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:8, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 }
]
const userProducts = [
    {id:9, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:10, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:11, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:12, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:13, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:14, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:15, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    {id:16, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
]


const Home = () => {
    const [deal_products, changeDealP] = useState(dealProducts);
    const [user_products, changeUserP] = useState(userProducts);
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

export default Home;
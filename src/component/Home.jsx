import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Slick from 'react-slick';
import { PrevArrow,NextArrow } from './Utility'

const dealProducts = [
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 }
]
const userProducts = [
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
    { name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?", price: 4500, img: "https://picsum.photos/id/0/200/300", rating: 4.0 },
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
                                <ProductCard name={product.name} img={product.img} price={product.price} rating={product.rating} />
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
                            return (<ProductCard name={product.name} img={product.img} price={product.price} rating={product.rating} />)
                        })
                    }
                    </Slick>                    
                </div>
            </div>
        </div>
    );
}

export default Home;
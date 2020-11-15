import React, { useState } from 'react';
import ProductCard from './ProductCard';

const initialProducts = [
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0},
    {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est?",price:4500,img:"https://picsum.photos/id/0/200/300",rating:4.0}
];

const Home = () => {
    const [products,changeProducts] = useState(initialProducts);
    return (
        <div className="home">
            <div className="product-dashboard">
            {
                products.map((product)=>{
                    return (<ProductCard name={product.name} price={product.price} img={product.img} rating={product.rating} />);
                })
            }
            </div>            
        </div>
    );
}

export default Home;
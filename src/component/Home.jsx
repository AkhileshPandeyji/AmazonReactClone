import React, { useState } from 'react';
import ProductCard from './ProductCard';

const initialProducts = [
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0},
    {name:"Apple Iphone 11 Pro",price:4500,img:"https://picsum.photos/200",rating:4.0}
];

const Home = () => {
    const [products,changeProducts] = useState(initialProducts);
    return (
        <div className="home">
            {
                products.map((product)=>{
                    return (<ProductCard name={product.name} price={product.price} img={product.img} rating={product.rating} />);
                })
            }
        </div>
    );
}

export default Home;
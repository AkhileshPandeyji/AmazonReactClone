import React from 'react';
// import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

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

const ProductDisplay = (props) => {
    // const { product_id } = useParams();
    const redirectHome = (e) => {
        e.preventDefault();
        props.history.push("/");
    }
    const addToCart = (e) => {
        e.preventDefault();
    }
    return (
        <div className="product-display">
            <Navbar {...props} />
            <Navbar2 />
            <div className="product-display-section">
                <div className="product-display-container">
                    <div className="product-display-image">
                        <img src="https://picsum.photos/id/0/200/300" alt="product-image" />
                    </div>
                    <div className="product-display-desc">
                        <h1>{product.name}</h1>
                        <hr />
                        <p>{product.description}</p>
                        {
                            product.features.map((feature) => {
                                return(
                                    <div>
                                        <p>{feature}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="product-display-action">
                        <button className="secondary">Add To Cart <span><i className="fas fa-shopping-cart fa-2x"></i></span></button>
                        <button className="primary">Proceed To Checkout <span><i className="fas fa-dollar-sign fa-2x"></i></span></button>
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
                        <input type="text" placeholder="Type your question here"></input>
                    </form>
                </div>
                {/* <div className="product-display-adv">

                </div> */}
            </div>
        </div>
    );
}

export default ProductDisplay;
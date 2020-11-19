import React from 'react';
import amazonLogo from '../images/amazonLogo.png';
import { useState } from 'react';
import search from '../images/loupe.svg';
import cart from '../images/cart.png';
import menuIcon from '../images/menu.png';
import MainMenu from './MainMenu';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    const [inputVal, changeInput] = useState({ text: "" });
    const [menuVisible, toggleMenu] = useState({ visible: false });
    const handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        changeInput({
            text: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("searched..");
    }
    const showMenu = (e) => {
        // e.preventDefault();
        const mainMenu = document.querySelector(".main-menu");
        // console.log(mainMenu);
        toggleMenu({ visible: !menuVisible.visible });
        // console.log(menuVisible);
        let vis = menuVisible.visible ? "visible" : "hidden";
        mainMenu.style.visibility = vis;
        console.log(vis);
    }
    const returnToHome = (e) => {
        props.history.push("/");
    }
    return (
        <div className="navbar">
            <div className="navbar-menu" onClick={showMenu}><img src={menuIcon} alt="menu"></img></div>
            <MainMenu />
            <div className="navbar-logo" onClick={returnToHome}><img src={amazonLogo} alt="logo"></img><span>.in</span></div>
            <div className="navbar-location">
                <div className="navbar-location-container">
                    <div className="navbar-location-upper">Deliver To Akhilesh</div>
                    <div className="navbar-location-lower">New Delhi 110075</div>
                </div>
            </div>
            <div className="navbar-search-form">
                <form onSubmit={handleSubmit}>
                    <div className="navbar-search-selection">
                        <select>
                            <option value="all" selected>All</option>
                        </select>
                    </div>
                    <div className="navbar-search-input">
                        <input type="text" name="search" value={inputVal.text} onChange={handleChange} />
                    </div>
                    <div className="navbar-search-btn">
                        <button><img src={search} alt="search" /></button>
                    </div>
                </form>
            </div>
            <div className="navbar-country">
                <select>
                    <option value="India">India</option>
                    <option value="US">US</option>
                </select>
            </div>
            <div className="navbar-lang">
                <div className="navbar-location-container">
                    <div className="navbar-location-upper">Deliver To Akhilesh</div>
                    <div className="navbar-location-lower">New Delhi 110075</div>
                </div>
            </div>
            <div className="navbar-orders">
                <div className="navbar-location-container">
                    <div className="navbar-location-upper">Deliver To Akhilesh</div>
                    <div className="navbar-location-lower">New Delhi 110075</div>
                </div>
            </div>
            <Link to="/myCart">
                <div className="navbar-cart">
                    <span className="cart-value">0</span>
                    <img src={cart} alt="cart"></img>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
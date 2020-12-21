import React from 'react';
import amazonLogo from '../images/amazonLogo.png';
import { useState } from 'react';
import search from '../images/loupe.svg';
import cart from '../images/cart.png';
import menuIcon from '../images/menu.png';
import MainMenu from './MainMenu';
import { Link } from 'react-router-dom';
import { cartValueContext } from '../contexts/cartValueContext';
import { useContext } from 'react';
import india from "../images/india.png";
import russia from "../images/russia.png";
import us from "../images/united-states.png";
import uk from "../images/united-kingdom.png";
import china from "../images/china.png";
import Select from "react-select";
import { connect } from "react-redux";

const Navbar = (props) => {
    console.log(india);
    const [inputVal, changeInput] = useState({ text: "" });
    const [menuVisible, toggleMenu] = useState({ visible: false });
    const { value,addOne,deleteOne } = useContext(cartValueContext);
    const [selectedOption,changeSelectedOption] = useState({selectedOption:{value:"india",label:<div><img src={india} alt="india-flag" style={{height:40,width:40}}/></div>}});


    const options = [
        {value:"india",label:<div><img src={india} alt="india-flag" style={{height:32,width:32}}/></div>},
        {value:"us",label:<div><img src={us} alt="us-flag" style={{height:32,width:32}} /></div>},
        {value:"uk",label:<div><img src={uk} alt="uk-flag" style={{height:32,width:32}} /></div>},
        {value:"russia",label:<div><img src={russia} alt="russia-flag" style={{height:32,width:32}} /></div>},
        {value:"china",label:<div><img src={china} alt="china-flag" style={{height:32,width:32}} /></div>}
    ]
    const customStyles = {
        padding:5,
        background:"black",
        textAlign:"center"
    }

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

    const changedSelectedValue = (changedOption) =>{
        changeSelectedOption({selectedOption:changedOption});
        console.log(changedOption);
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
                <Select value={selectedOption.selectedOption} onChange={changedSelectedValue} options={options} styles={customStyles.select} />
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
                    <span className="cart-value">{props.myCart.length}</span>
                    <img src={cart} alt="cart"></img>
                </div>
            </Link>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return{
        myCart:state.myCart
    };
}

export default connect(mapStateToProps,null)(Navbar);
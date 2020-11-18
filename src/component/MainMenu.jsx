import React from 'react';
import MenuItem from './MenuItem'
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (  
        <div className="main-menu">
            <Link to="/login" >
                <MenuItem name="Login" />  
            </Link>   
            <Link to="/signUp">
                <MenuItem name="Sign Up" />
            </Link>         
            <Link to="/help">
                <MenuItem name="Help" />
            </Link>            
        </div>
    );
}
 
export default MainMenu;
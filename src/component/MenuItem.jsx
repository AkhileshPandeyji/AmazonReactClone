import React from 'react';
const MenuItem = (props) => {
    return ( 
        <div className="menu-item">
            <h2>{props.name}</h2>
        </div>
     );
}
 
export default MenuItem;
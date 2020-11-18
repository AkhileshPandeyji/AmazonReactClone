import React from 'react';
const TwoButton = (props) => {

    return (
        <div>
            <div>
                <button className="login-submit" onClick={props.loginAction}>Login</button>
            </div>
            <div>
                <button className="login-submit gray" onClick={props.handleClick}>Back</button>
            </div>
        </div>
    )
}

export default TwoButton;
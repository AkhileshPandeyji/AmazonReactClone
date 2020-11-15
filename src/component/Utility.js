import React from 'react';

export const PrevArrow = (props) => {
    const { className,style,onClick } = props;
    return (  
        <div className={className} style={{...style,fontSize:100,background:"#eaeaea",height:70,width:30,textAlign:"center",borderRadius:5}} onClick={onClick} />
    );
}
export const NextArrow = (props) => {
    const { className,style,onClick } = props;
    return (  
        <div className={className} style={{...style,fontSize:100,background:"#eaeaea",height:70,width:30,textAlign:"center",borderRadius:5}} onClick={onClick} />
    );
}
 

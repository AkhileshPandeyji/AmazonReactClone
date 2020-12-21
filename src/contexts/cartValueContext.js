import { createContext,useState } from 'react';

export const cartValueContext = createContext();

const CartValueContextProvider = (props)=>{
    const [ cartValue, changeCartValue ] = useState({value:5});

    const addOne = ()=>{
        changeCartValue( {value : cartValue.value + 1 } );
    }
    const deleteOne = ()=>{
        changeCartValue( {value:cartValue.value - 1});
    }

    return(
        <cartValueContext.Provider value={{...cartValue,addOne,deleteOne}}>
            {
                props.children
            }
        </cartValueContext.Provider>
    )
};

export default CartValueContextProvider;


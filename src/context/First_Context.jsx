import React, { useEffect } from "react";
import { createContext } from "react";


const First_Context = createContext();

const First_Context_Provider = (props) => {

    const state = {
        'name': 'sajan',
        'class': '2nd Year'
    }

    return (

        <First_Context.Provider value={{state}}>
            {props.children}
        </First_Context.Provider>
    )

}

export { First_Context, First_Context_Provider } 
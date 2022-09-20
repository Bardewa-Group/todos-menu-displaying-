import React from "react";

const SecondContext = React.createContext();

const SecondContextProvider = (props) => {
    const state = {
        'name': 'sajan',
        'caste': 'bardewa'
    }
    return (
        <SecondContext.Provider value={state}>
            {props.children}
        </SecondContext.Provider>
    )
}

export { SecondContext, SecondContextProvider };
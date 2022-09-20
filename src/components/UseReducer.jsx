
import React from 'react'

const UseReducer = () => {

    const listener = (initial, property) => {

        if (property.type === "increase") {
            initial += 1;
        }
        if (property.rajan === "increase") {
            initial -= 1;
        }
        return initial;
    }

    const current = 11;
    const [initial, initilizer] = React.useReducer(listener, current);

    return (
        <>
            <h2>Testing Use Reducer</h2>
            <h1>{initial}</h1>
            <button onClick={() => { initilizer({ type: "increase" }) }}>increase</button>
            <button onClick={ ()=>{ initilizer({ rajan: "increase" }) } }>decrease</button>
        </>
    )
}

export default UseReducer
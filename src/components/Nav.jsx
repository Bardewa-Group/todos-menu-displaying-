import React from 'react'


const Nav = ({ category_list, set_menu_data, Menu }) => {

    const filterItem = (category) => {
        const newList = Menu.filter((data) => {
            return (data.category === category);
        })

        set_menu_data(newList);
    }

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {category_list.map((data) => {
                        return (
                            <button key={data} className="btn-group__item" onClick={() => filterItem(data)}>{data}</button>
                        )
                    })}
                    <button className="btn-group__item" onClick={() => set_menu_data(Menu)}>All</button>
                </div>
            </nav>
        </>
    )
}

export default Nav
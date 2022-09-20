import React from 'react'

const Todos = () => {

    const [input, setInput] = React.useState("");
    const [item, setItems] = React.useState(JSON.parse(localStorage.getItem('sajan')) || []);
    const [edit, setEdit] = React.useState('')


    const addItems = () => {
        if (!input) {
            alert('fill list')

        } else if (edit) {
            for (let i = 0; i < item.length; i++) {
                if (item[i].id == edit['id']) {
                    item[i]['value'] = input;
                }
            }
        } else {
            const newInput = {
                id: new Date().getTime().toString(),
                value: input,
            }
            setItems([...item, newInput]);
        }
        setEdit('')
        setInput('')

    }

    const deleteItem = (item_id) => {
        const updateList = item.filter((x) => {
            return (x.id !== item_id)
        })
        setItems(updateList)
    }

    const deleteAll = () => {
        setItems([])
    }

    // setting the value in localStorage 
    React.useEffect(() => {
        localStorage.setItem('sajan', JSON.stringify(item))
    }, [input])


    // editing option
    const editItem = (editItem) => {

        const edited_item = item.filter((x) => {
            return (x.id == editItem)
        })
        setInput(edited_item[0]["value"]);
        setEdit(edited_item[0]);
    }


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="images/menu-4.jpg" alt="logo" />
                        <figcaption>Add your list here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder='Enter... :)' className='form-control' value={input} onChange={(event) => { setInput(event.target.value) }} />
                        { edit == '' ?  <i className="fa fa-plus add-btn" onClick={addItems}></i> : <i className="far fa-edit add-btn" onClick={() => addItems()}></i>}
                        
                    </div>

                    <div className="showItems">
                        {
                            item.map((x) => {
                                return (
                                    <div className="eachItem" key={x.id}>

                                        <h3>{x.value}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={() => editItem(x.id)}></i>
                                            <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(x.id)}></i>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={deleteAll}>
                            <span>Check List</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todos